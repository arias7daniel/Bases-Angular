import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeroeComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 20;
  }

  reset():void{
    this.name = 'Ironman',
    this.age = 45;
  }
}
