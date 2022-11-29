import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loginService:LoginService){}

  ngOnInit(): void {

    firebase.initializeApp({

      apiKey: "AIzaSyCYt7STNvjmVKzfiim2swhdoxOiZXa0OZ4",
      authDomain: "mis-clientes-5a8a9.firebaseapp.com",

    });

  }

  estaLogueado(){

    return this.loginService.estaLogeado();

  }

  logout(){

    this.loginService.logout();

  }


}
