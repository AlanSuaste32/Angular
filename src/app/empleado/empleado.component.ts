import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aqui iría un Empleado!</p>",
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color:red};"]

})
export class EmpleadoComponent {
    nombre = "Alan";
    apellido = "Suaste";
    edad = 18;
    empresa = "Pildoras Informáticas";


    /*getEdad(){
      return this.edad;
    }*/

    habilitacionCuadro=false;

    usuRegistrado=false;

    textoDeRegistro="No hay Nadie Registrado";

    getRegistroUsuario(){
      this.usuRegistrado=false;
    }

    setUsuarioRegistrado(event:Event){
      //alert("El Usuario se Acaba de Registrar");

      //this.textoDeRegistro="El Usuario se Acaba de Registrar";

      if((<HTMLInputElement>event.target).value=="si"){
        this.textoDeRegistro="El Usuario se Acaba de Registrar";
      }else{
        this.textoDeRegistro="No hay Nadie Registrado";
      }

    }

}
