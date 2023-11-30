import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dbz-agregar-personaje',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './agregar-personaje.component.html',
  styleUrl: './agregar-personaje.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgregarPersonajeComponent { }
