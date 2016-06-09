/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../typings/globals/es6-shim/index.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';

import {AppComponent} from './app.component';


bootstrap(AppComponent);