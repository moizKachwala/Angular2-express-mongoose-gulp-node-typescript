import {bootstrap}    from 'angular2/platform/browser'
import {provide}    from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common'
import {ROUTER_BINDINGS, ROUTER_PROVIDERS} from 'angular2/router'

import {AppComponent} from './components/app/AppComponent'
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    CORE_DIRECTIVES
]);

