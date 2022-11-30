 import {Component} from '@angular/core';
 
 @Component({
    selector :'app-contador',
    template:`
    <h1> {{ titulo }} </h1>

    <h3> La base es <strong>{{base}}</strong></h3>

    <button (click)=" acumular(+base)"> +5</button>

    <span>  {{ numero }}</span>

    <button (click)=" acumular(-base)"> -5</button>
`
 })
 //para usar la clase fuera de aqui(export)
 export class ContadorComponent{
    public  titulo: string = 'Contador app';
 numero: number = 10;
 base : number = 5;
 
  acumular(valor:number){
  this.numero +=valor;

 }

}