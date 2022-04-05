import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidad/user';
import { Videojuego } from '../entidad/videojuego';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username : string = ""
    password : string = ""
    mensaje :string=""
    imprimirMensaje: boolean=false
    usuario : Usuario | null=null
    //user: string;

    usuariosValidos : 
    
    Usuario[]=[new Usuario("Mateo" , "root",
                    [new Videojuego("Mass Effect 2", "Bioware", 8.5, "",), 
                     new Videojuego("Elden Ring", "From Software", 9, "",),
                     new Videojuego("Hades", "Supergiant", 8, ""), 
                     new Videojuego("League of Legends", "Riot",7.5, "")]),

    new Usuario("Paco" , "123456789",  
                   [new Videojuego("Hollow Knight", "Team Cherryt", 9, ""),
                    new Videojuego("Battlefield 4", "EA", 7, ""),
                    new Videojuego("COD4", "Activision", 7.8, "")])]
 

  constructor(private router:Router) {}

  ngOnInit() {}

  public login(){

    var usuarioV=false;
    var passwordV=false;

    for(var i=0;i<this.usuariosValidos.length;i++){
      if(this.username==this.usuariosValidos[i].nombre && !usuarioV){
        if(this.password==this.usuariosValidos[i].password && !passwordV){
         usuarioV=true
         passwordV=true
         this.usuario=this.usuariosValidos[i]
         console.log(this.usuario)
         AppComponent.usuario = this.username;
         this.router.navigate([ 'videojuegos'])
        }
      }
    }
    if(!usuarioV){
      this.imprimirMensaje=true
      this.mensaje="Usuario incorrecto."
    }

    else if(!passwordV){
      this.imprimirMensaje=true
      this.mensaje="Contraseña incorrecta."
    }
  }
}
