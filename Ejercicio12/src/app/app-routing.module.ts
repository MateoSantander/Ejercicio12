import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { headComponent } from './head/head.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { InformacionComponent } from './informacion/informacion.component';
import { VideojuegosComponent} from './videojuegosComp/videojuegosComp.component';
const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'videojuegos',
    component : VideojuegosComponent
  },
  {path : 'contacto', component : ContactoComponent}
  ,
  {path : 'informacion', component : InformacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
