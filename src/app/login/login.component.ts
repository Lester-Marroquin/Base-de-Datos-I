import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorInicio: boolean = false;
  //errorInicioCliente: boolean = false;
  loading: boolean = false;
  //loadingCliente: boolean = false;
  persona: any = {};
  //cliente: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login() {
    location.href = "/home";
    // let formulario: any = document.getElementById("login");
    // let formularioValido:boolean = formulario.reportValidity();
    // if (formularioValido) {
    //   this.loading = true;
    //   this.loginService().subscribe(
    //     data => this.iniciarSesion(data)
    //   )
    // }
  }


  iniciarSesion(resultado: any) {
    this.loading = false;
    if (resultado) {
      localStorage.setItem("persona", JSON.stringify(resultado));
      location.href = "/home";
    } 
      this.errorInicio = true;
    
  }


  /*iniciarSesion(resultado: any) {
    this.loading = false;
    if (resultado) {
    localStorage.setItem("usuario", JSON.stringify(resultado));

    if (resultado.idRol == 1) {
    location.href = "/home";
    } else {
    location.href = "/home-user";
    }
    } else {
    this.errorInicio = true;
   } 
  } */

  loginService() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<any>("http://localhost:3030/persona/login", this.persona, httpOptions);
  }


}
