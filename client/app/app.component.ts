import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroService} from "./services/hero.service";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HeroDetailComponent} from "./components/heroDetail/hero-detail.component";

@Component({
    selector:'my-app',
    templateUrl:'./app/app.html',
    directives:[ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])

export class AppComponent {
    title = 'Tour of Heroes';
}