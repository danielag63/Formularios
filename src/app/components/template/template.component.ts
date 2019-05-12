import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario:Object = {
    nombre: 'Daniela',
    apellido: 'Garcia',
    correo: ''
  }
  constructor() { }
  
  guardar(forma:NgForm){
    console.log('ngFrom ', forma);
    console.log('valor', forma.value);
  }
}
