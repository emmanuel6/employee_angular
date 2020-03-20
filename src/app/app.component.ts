import { Component } from '@angular/core';

import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   ArregloEmployee: Employee[] = [
     {id: 1, name: 'Ryan', country: 'USA'},
     {id: 2, name: 'Chuyito', country: 'MEX'},
     {id: 3, name: 'Boludo', country: 'ARG'}
   ];

   selectedEmployee: Employee = new Employee();

   addOrEdit() {

    if (this.selectedEmployee.id === 0) {
      // se agrega un valor al objeto employe en "id" que vale el arreglo actual +1
      this.selectedEmployee.id = this.ArregloEmployee .length + 1;
      // una vez agregado el id y los demas campos con ngModel se agregan al arregloEmployee
      this.ArregloEmployee.push(this.selectedEmployee);
    }

    // llama un nuevo objeto sin enviarle datos en () por lo tanto esta vacio
    this.selectedEmployee = new Employee();

   }





   puchaEmpleado(parametroEmpleado: Employee) {

    this.selectedEmployee = parametroEmpleado;

   }


// borrar datos
   delete() {

    if (confirm('Quieres eliminarlo?')) {
      this.ArregloEmployee = this.ArregloEmployee.filter(x => x !== this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
    
  }



}
