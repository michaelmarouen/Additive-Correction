import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdditivesService } from 'src/app/services/additives/additives.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchPageComponent {

  searchInput: string;

  constructor(
    private _router: Router
  ) { }


  async search() {
    console.log(this.searchInput);
    this._router.navigate([`../tabs/list/${this.searchInput}`]);
    this.searchInput = '';
  }
}
