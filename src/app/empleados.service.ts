import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices){

  }

    empleados:Empleado[]=[

        new Empleado("Alan", "Suaste", "Presidente", 7800),
        new Empleado("Ana", "Canche", "Directora", 5800),
        new Empleado("Maria", "Fernandez", "Jefa Seccion", 3800),
        new Empleado("Laura", "Lopes", "Administrativo", 2800)
    
      ];

      agregarEmpleadoServicio(empleado:Empleado){

        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a Agregar: " + "\n" + empleado.nombre + "\n" + "Salario: " + empleado.salario);

        this.empleados.push(empleado);

        this.dataService.guardarEmpleados(this.empleados);

      }

      encontrarEmpleado(indice:number){

        let empleado:Empleado=this.empleados[indice];

        return empleado;

      }

      actualizarEmpleado(indice:number, empleado:Empleado){

          let empleadoModificado=this.empleados[indice];

          empleadoModificado.nombre=empleado.nombre;
          empleadoModificado.apellido=empleado.apellido;
          empleadoModificado.cargo=empleado.cargo;
          empleadoModificado.salario=empleado.salario;
      }

      eliminarEmpleado(indice:number){

        this.empleados.splice(indice,1);

      }

}