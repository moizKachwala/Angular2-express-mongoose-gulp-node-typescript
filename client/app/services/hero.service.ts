/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Injectable} from 'angular2/core';
import {HEROES} from "../mock/mock-heroes";


@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHero(id: number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}