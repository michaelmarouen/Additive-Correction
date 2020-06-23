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
    const data = await this._http.get('http://localhost:3000/additives').pipe(
      first(),
      // map(e => e),
      // tap(),
    ).toPromise();
    this._data$.next(data);
  }

  getItemById(id: string) {}
}
