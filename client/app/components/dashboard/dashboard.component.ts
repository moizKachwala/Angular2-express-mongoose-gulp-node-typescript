// /**
//  * Created by Moiz.Kachwala on 02-06-2016.
//  */

// import {Component, OnInit} from 'angular2/core';
// import {Hero} from "../../models/hero";
// import {HeroService} from "../../services/hero.service";
// import { Router } from 'angular2/router';

// @Component({
//     selector: 'my-dashboard',
//     templateUrl: './app/components/dashboard/dashboard.component.html',
//     styleUrls:['./app/components/dashboard/dashboard.component.css']
// })

// export class DashboardComponent implements OnInit {
//     heroes: Hero[] = [];

//     constructor(
//         private router: Router,
//         private heroService: HeroService) {
//     }

//     ngOnInit() {
//         this.heroService.getHeroes()
//             .then(heroes => this.heroes = heroes);
//     }

//     gotoDetail(hero: Hero) {
//         let link = ['HeroDetail', { id: hero._id }];
//         this.router.navigate(link);
//     }
// }