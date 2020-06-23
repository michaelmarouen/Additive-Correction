import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './components/tabs/tabs.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    SearchPageComponent,
    ListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
