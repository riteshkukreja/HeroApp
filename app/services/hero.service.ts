import { Injectable } from '@angular/core';

import { Hero } from '../interfaces/hero';

@Injectable()
export class HeroService {

  constructor() { }

  selectedHero:Hero;

  heroes: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  getAllHeroes() {
    return this.heroes;
  };

  getTopHeroes(len: number) {
    return this.heroes.slice(0, len);
  };

  getHero(id: number) {
    this.heroes.forEach((hero: Hero) => {
      if(hero.id == id)
        return hero;
    });

    return false;
  };

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  };

  deselectHero() {
    this.selectedHero = null;
  };

  update(hero: Hero) {
    this.heroes.forEach((cHero: Hero) => {
      if(cHero.id == hero.id)
        cHero.name = hero.name;
    });
  }

}
