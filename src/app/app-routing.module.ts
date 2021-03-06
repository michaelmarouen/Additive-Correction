import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ItemPageComponent } from './components/item-page/item-page.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'search',
        component: SearchPageComponent
      },
      {
        path: 'list',
        children: [
          {
            path: '',
            component: ListPageComponent
          },
          {
            path: ':id',
            component: ItemPageComponent
          },
        ]
      },
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
