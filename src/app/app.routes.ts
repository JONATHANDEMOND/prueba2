import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { formularioGuard, loginGuard, revisionGuard, usuarioGuard } from './guards/login.guard';
import { RevisonComponent } from './pages/revison/revison.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsauriosDetallesComponent } from './pages/usaurios-detalles/usaurios-detalles.component';
import { FormualrioUserComponent } from './pages/formualrio-user/formualrio-user.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'revision',component:RevisonComponent,canActivate:[revisionGuard]},
    {path:'formulario',component:FormualrioUserComponent,canActivate:[formularioGuard]},
    {path:'usuario',component:UsauriosDetallesComponent,canActivate:[loginGuard]},
];
