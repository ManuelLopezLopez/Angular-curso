import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //Cosas que quiero que sean visibles 
    exports:[
        ListadoComponent
    ],
    //Aqui adentro van modulos usualmente unicamente
    imports:[
        CommonModule
        
    ],
})

export class HeroesModule{}
