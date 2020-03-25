import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	mensaje:string;
	mensajedos:string;

  constructor() { }

  ngOnInit(): void {

  	this.mensaje = 'hola';
  	console.log("ok");
  }

  test(){

  	// console.log("ok");

  	this.mensajedos = 'test';

  }

}
