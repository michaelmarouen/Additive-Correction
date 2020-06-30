import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdditivesService {

  private _data$: BehaviorSubject<any> = new BehaviorSubject(null);
  data$: Observable<any> = this._data$.asObservable();

  constructor(
    private _http: HttpClient
  ) { }

  async load() {
    const data = await this._http.get<{additives?: any}>('https://michaelmarouen.github.io/Additive-Correction/assets/db.json').pipe(
      map((response) => response?.additives),
      // tap(),
    ).toPromise();
    this._data$.next(data);
  }

  async getItemById(id: string) {
    const data = this._data$.value;
    if (!data) await this.load();
    const result = this._data$.value.find(el => el.id ===  id);
    if (!result) return alert('no data');

    return result;
  }
}
