import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';  // an RC4 implementation, now done in NgModule decorator

@Component({
  selector: 'my-heroes',
  directives: [HeroDetailComponent], // an RC4 implementation, now done in NgModule decorator
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit
{  
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero)
  {
    this.selectedHero = hero;
  }

  constructor(private router: Router, private heroService: HeroService)
  {

  }

  getHeroes()
  {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit()
  {
    this.getHeroes();
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
