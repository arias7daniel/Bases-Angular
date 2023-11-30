import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { routes } from './app.routes';
import { HeroesService } from './heroes/services/heroes.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgbNavModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public menuItems = routes
    .flat()
    .filter(route => route && route.path != '**');

  constructor(private heroesService: HeroesService) {
  }

  get active(): number {
    return this.heroesService.active;
  }

  public estado(index: number) {
    this.heroesService.vista(index);
  }
}
