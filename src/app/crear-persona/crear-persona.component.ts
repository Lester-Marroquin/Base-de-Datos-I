import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  persona:any = {};
  loading:boolean = false;

constructor(private http: HttpClient) { }

ngOnInit(): void {
}
crear(){
  let formulario: any = document.getElementById("crear");
  let formularioValido: boolean = formulario.reportValidity();
  if (formularioValido) {
    this.loading = true;
    this.createService().subscribe(
      data => this.confirmar(data)
    )
  }
}

createService(){
  var httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  return this.http.post<any>("http://localhost:3030/persona/guardar", this.persona, httpOptions);
}  

confirmar(resultado:any){
  this.loading = false;
    if (resultado) {
      alert("Datos ingresados correctamente")
      this.persona = {};
    } else {
      alert("Error al ingresar los datos")
    }
}


regresar(){
  location.href = "/";
}

}
