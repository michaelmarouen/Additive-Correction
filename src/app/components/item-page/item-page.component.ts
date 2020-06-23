import { Component, OnInit } from '@angular/core';
import { AdditivesService } from 'src/app/services/additives/additives.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {

  item: any;

  constructor(
    private _api: AdditivesService,
    private _route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    // search current ID
    const {id = null} = this._route.snapshot.params;
    if (!id) return;
    this.item = await this._api.getItemById(id);
  }

}
