import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Additive';
  constructor (private _platform:Platform,
    public toastCtrl: ToastController
  ){
    this._platform.ready().then(platform => {
      this.displayToastInstall(platform);
    })
  }
  async displayToastInstall(platform = null) {
    // Detects if device is on iOS 
    const isIos = () => {
      const userAgent = platform || window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test( userAgent );
    }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);
    // Checks if should display install popup notification:
    if (!isIos() && !isInStandaloneMode()) {
      const toast = await this.toastCtrl.create({
        header: 'AdditiveFinder 2020 ',
        message: 'Installé',
        position: 'bottom',
        buttons: [
          {
            text: 'Done',
            role: 'cancel',
            handler: () => {
              console.log(`Annulé par l'utilisateur`);
            }
          }
        ]
      });
      await toast.present();
    }
    
  }
}
