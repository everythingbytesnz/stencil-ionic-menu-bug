import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Note: loader import location set using "esmLoaderPath" within the output target config
import { defineCustomElements } from '../../web-components/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

// If you uncomment the line below, the web component hyperlink will open a modal, but the ionic-menu won't open. 
// If you comment the line below, the web component won't function properly, but the ionic-menu will work correctly.
defineCustomElements();


