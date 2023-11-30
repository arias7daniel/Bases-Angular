import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContadorComponent {
  public contador: number = 0;

  public sumar(): void {
    this.contador += 1;
  }

  public resta(): void {
    this.contador -= 1;
  }

  public reiniciar(): void {
    this.contador = 0;
  }
}
