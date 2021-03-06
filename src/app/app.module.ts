import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LevelPipe } from './pipes/level/level.pipe';
import { ColorPipe } from './pipes/color/color.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';

import { IonicModule } from '@ionic/angular';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabsComponent } from './components/tabs/tabs.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { UpdatesNotificationComponent } from './components/updates-notification/updates-notification.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    SearchPageComponent,
    ListPageComponent,
    ItemPageComponent,
    LevelPipe,
    ColorPipe,
    UpdatesNotificationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
