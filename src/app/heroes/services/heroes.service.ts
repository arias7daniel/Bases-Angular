import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private _active: number = 0;

  constructor() {
    this.leerLocalStorage();
  }

  get active(): number {
    return this._active;
  }

  private leerLocalStorage(): void {
    if (!localStorage.getItem('vista')) return;
    this._active = JSON.parse(localStorage.getItem('vista')!);
  }

  private guardarLocalStorage(): void {
    localStorage.setItem('vista', JSON.stringify(this._active));
  }

  public vista(index: number): void {
    this._active = index;
    this.guardarLocalStorage()
  }

}
