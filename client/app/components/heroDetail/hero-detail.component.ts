/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, Input} from 'angular2/core';
import {Hero} from "../../models/hero";
import { RouteParams } from 'angular2/router';
import {HeroService} from "../../services/hero.service";

@Component({
    selector: 'my-hero-detail',
    templateUrl:'./app/components/heroDetail/hero-detail.component.html',
    styleUrls:['./app/components/heroDetail/hero-detail.component.css']
})

export class HeroDetailComponent {
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}