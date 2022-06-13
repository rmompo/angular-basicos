import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ titulo }} </h1>
        <h3>la base es: <strong>{{base}}</strong></h3>

        <button (click)="acumular(base*-1);"> -{{base}} </button>
        <span> {{ numero }} </span>
        <button (click)="acumular(base);"> +{{base}} </button>
    `
})
export class ContadorComponent{
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;
  
    public acumular(valor: number) {
      this.numero += valor;
    }
}