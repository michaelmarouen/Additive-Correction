import { Component, OnInit } from '@angular/core';
import { AdditivesService } from 'src/app/services/additives/additives.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  additives$: Observable<any>;
  max: number = 10;

  constructor(private _api: AdditivesService) { }

  ngOnInit() {
    this._api.load();
    this.additives$ = this._api.data$;
  }

  loadMore() {
    this.max = this.max + 10;
  }

}
