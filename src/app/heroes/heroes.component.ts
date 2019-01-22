import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
// place holder hero attribute of component
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;

// defining selectedHero as a Hero object
  selectedHero: Hero;

// setting selectedHero to a proper value with this onSelect method
  onSelect(hero: Hero): void{
    this.selectedHero = hero
  }

  constructor() { }

  ngOnInit() {
  }

}

