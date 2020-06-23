import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {

  searchInput: string;
  constructor() { }


  search() {
    console.log(this.searchInput);
  }
}
