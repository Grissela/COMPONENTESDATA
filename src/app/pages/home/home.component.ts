import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor!:string;

  titulo:string="Data Binding Interpolation";
  visible:string="";
  cambiar:string="show";
  texto!:string

  ocultar(){
    this.visible ="Event Binding, es el mecanismo de data binding mediante el cual trabaja con los eventos que se encuentran en el DOM.";
    this.cambiar="hide";
  
  }
  ngOnInit(): void {
  }

}
