import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdditivesService } from 'src/app/services/additives/additives.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WikiService } from 'src/app/services/wiki/wiki.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemPageComponent {

  item: any;
  details: any = null;

  constructor(
    private _api: AdditivesService,
    private _wiki: WikiService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  async ionViewWillEnter() {
    console.log('ionViewWillEnter');
    // search current ID
    const {id = null} = this._route.snapshot.params;
    if (!id) return;
    const item = await this._api.getItemById(id);
    if (!item) return this._router.navigate(['../tabs/search']);
    this.item = item;
    // requerst for detail
    this.details = await this._wiki.getByAdditive(id);
  }

}
