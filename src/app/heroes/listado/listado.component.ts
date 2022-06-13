import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironmam','Hulk','Thor','Capitán América'];
  heroeBorrado: string = '';

  public borrarHeroe():void {
    //const heroeBorrado = this.heroes.pop();
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
