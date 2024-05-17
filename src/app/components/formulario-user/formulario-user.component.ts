import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-user',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './formulario-user.component.html',
  styleUrl: './formulario-user.component.css'
})
export class FormularioUserComponent {
email:any;
password:any
id:any
type:any
descricpion:any
servicio=inject(LoginService)
guardar(datos:any){
  this.servicio.postUsers(datos.value).subscribe()
  window.location.reload()
}
}
