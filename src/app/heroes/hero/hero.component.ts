import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string ='Ironman';
  public age: number = 45;

  get capitalizeName (): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription (): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero (): void
  {
    this.name = 'Spiderman';

  }

  changeAge ()
  {
    this.age = 102;

  }

  resetForm (): void
  {
    this.name ='Ironman';
    this.age = 45;

  }


}
