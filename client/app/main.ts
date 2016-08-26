/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../typings/globals/es6-shim/index.d.ts"/>

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);