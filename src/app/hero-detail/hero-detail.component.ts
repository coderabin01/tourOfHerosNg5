import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService} from '../heroes/hero.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  constructor(
    private location: Location,
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero );
  }
  goBack(){
    this.location.back();
  }
  save(hero){
    this.heroService.updateHero(hero).subscribe( () => this.goBack());
  }
}
