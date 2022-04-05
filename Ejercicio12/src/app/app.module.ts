import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegosComponent } from './videojuegosComp/videojuegosComp.component';
import { LoginComponent } from './login/login.component';
import { headComponent } from './head/head.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InformacionComponent } from './informacion/informacion.component';

@NgModule({
  declarations: [						
    AppComponent,
      VideojuegosComponent,
      LoginComponent,
      headComponent,
      ContactoComponent,
      InformacionComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
