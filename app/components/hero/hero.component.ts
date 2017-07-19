import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router }            from '@angular/router';

import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.heroes = this.heroService.getAllHeroes();
    this.selectedHero = this.heroService.selectedHero;
  }

  selectHero(hero:Hero) {
    this.heroService.selectedHero = hero;
    this.selectedHero = hero;
  }

  view() {
    this.router.navigate(['/detail']);
  }
}
