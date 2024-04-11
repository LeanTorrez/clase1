import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Primera clase labo 4';

  /*1- (app.component.html) Realizar:
  Una aplicación que se le ingresen dos edades en dos cuadro de textos
  edadUno, EdadDos
  mostrar el promedio y la suma en dos cuadros de textos nuevos
  botones "calcular" y "limpiar cuadros de textos" */
  edadUno = "1";
  edadDos = "1";
  promedio = 0;
  sumaEdad = 0;

  sumaEdades(){
    return parseInt((this.edadUno)) + parseInt((this.edadDos));
  }

  calcularPromedio(){
    this.sumaEdad = this.sumaEdades();
    this.promedio =  this.sumaEdad / 2;
  }

  limpiarInputs(){
    this.edadUno = "0";
    this.edadDos = "0";
    this.promedio = 0;
    this.sumaEdad = 0;
  }
}
