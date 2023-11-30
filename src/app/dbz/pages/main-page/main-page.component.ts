import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListadoComponent } from '../../components/listado/listado.component';
import { AgregarPersonajeComponent } from '../../components/agregar-personaje/agregar-personaje.component';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    ListadoComponent,
    AgregarPersonajeComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MainPageComponent {
  public personajes: Personaje[] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    },
  ];
}
