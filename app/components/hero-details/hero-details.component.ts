import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  hero: Hero;
  constructor(private heroService: HeroService, private location: Location) { }

  ngOnInit() {
    this.hero = this.heroService.selectedHero;

    if(!this.hero)
      this.location.back();
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.heroService.update(this.hero);
    this.goBack();
  }

}
