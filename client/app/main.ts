/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../typings/globals/es6-shim/index.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';


import {AppComponent} from './app.component';


bootstrap(AppComponent, [HTTP_PROVIDERS]);