import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'dbz-listado',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoComponent {

  @Input()
  public personajes: Personaje[] = [];
}
