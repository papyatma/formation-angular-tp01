// le point d'entrée de notre webpack


// import node modules

// import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// ==> Navigateur OK

import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

/* if (environment.production) {
  enableProdMode();
} */

// main.ts : son role principal est de charger le tout premier module (bootstraper, ne pas confondre avec bootstrap css :) )

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
