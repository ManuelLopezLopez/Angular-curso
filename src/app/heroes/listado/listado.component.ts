import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America','Viuda Negra'];
  heroeBorrado: string = " ";

  borrarHeroe(){
    
    //Shift elimina el primer elemento consecutivamente al pulsar
   this.heroeBorrado = this.heroes.shift() || '' ;
   
  }
  
}
