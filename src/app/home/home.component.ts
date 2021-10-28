import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  errorInicio: boolean = false;
  errorInicioCliente: boolean = false;
  loading: boolean = false;
  loadingCliente: boolean = false;
  usuario: any = {};
  cliente: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login() {
    location.href = "/menu";
    // let formulario: any = document.getElementById("login");
    // let formularioValido: boolean = formulario.reportValidity();
    // if (formularioValido) {
    //   this.loading = true;
    //   this.loginService().subscribe(
    //     data => this.iniciarSesion(data)
    //   )
    // }
  }

  iniciarSesion(resultado: any) {
    this.loading = false;
    // if (resultado) {
    //   localStorage.setItem("usuario", JSON.stringify(resultado));

    //   if (resultado.idRol == 1) {
    //     location.href = "/home";
    //   } else {
    //     location.href = "/home-user";
    //   }
    // } else {
    //   this.errorInicio = true;
    // }
  }

  loginService() {
    // var httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // }
    // return this.http.post<any>("http://localhost:2020/usuario/login", this.usuario, httpOptions);
  }

}
