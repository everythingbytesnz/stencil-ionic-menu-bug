import { Component } from '@angular/core';
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(private _menuCtrl: MenuController) {}

  async openMenu() {
    this._menuCtrl.getMenus().then(menus => console.log(menus));
    await this._menuCtrl.open();
  }
}
