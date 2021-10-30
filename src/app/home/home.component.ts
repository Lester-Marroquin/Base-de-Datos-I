import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  persona: any = {};
  perfil: boolean = false;;

  constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
    // this.persona = JSON.parse(localStorage.getItem("persona")!);
    // if (!this.persona) {
    // location.href = "/";
    // } else {
    //   if (this.usuario.idRol != 1) {
    //     location.href = "/";
    //   }
    // }
  }

  logout() {
    // localStorage.removeItem("persona");
    // location.href = "/";
  }

  mostrarPerfil() {

    //this.perfil = !this.perfil;
  }

  ingresarPersona(){
    location.href="/crear-persona";
  }

}
