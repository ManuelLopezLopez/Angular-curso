import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador.component";

@NgModule({
    declarations: [
        ContadorComponent
    ],
    //Cosas que quiero que sean visibles 
    exports:[
       ContadorComponent
    ],
    //Aqui adentro van modulos usualmente unicamente
    imports:[
        CommonModule
        
    ],
})

export class ContadorModule{}