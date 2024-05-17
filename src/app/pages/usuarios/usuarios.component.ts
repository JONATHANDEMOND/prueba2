import { Component } from '@angular/core';
import { FormularioUserComponent } from '../../components/formulario-user/formulario-user.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [FormularioUserComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

}
