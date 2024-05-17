import { Component, Inject, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
email:any;
pasword:any;
type:any;
id:any
usuario:any
servicio=inject(LoginService)
ruta=Inject(Router)


ngOnInit(): void {
  this.servicio.getUsers().subscribe(p=>{
   this.usuario=p
  })
 }

 eliminar(id:any){
  this.servicio.deletUserID(id).subscribe()
  window.location.reload()
}

guardar(datos:any){
  this.servicio.postUsers(datos.value).subscribe()
  window.location.reload()
}

cerrar(){
  localStorage.removeItem('acceso')
  
  window.location.href= 'login'
}
}


