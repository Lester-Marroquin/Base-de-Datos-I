import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class ProductoComponent implements OnInit {

  loading: boolean = false;
  usuario: any = {};
  perfil: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.usuario = JSON.parse(localStorage.getItem("usuario"));
    // if (!this.usuario) {
    //   location.href = "/";
    // } else {
    //   if (this.usuario.idRol != 1) {
    //     location.href = "/";
    //   }
    // }
  }

  logout() {
    localStorage.removeItem("usuario");
    location.href = "/";
  }

  mostrarPerfil() {

    //this.perfil = !this.perfil;
  }

}
