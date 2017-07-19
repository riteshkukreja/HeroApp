import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heroes: Hero[];
  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this.heroes = this.heroService.getTopHeroes(4);
  }

  selectHero(hero:Hero) {
    this.heroService.selectedHero = hero;
    this.router.navigate(['detail']);
  }

}