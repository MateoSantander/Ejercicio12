import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { Videojuego } from '../entidad/videojuego';
@Component({
  selector: 'app-videojuegos-component',
  templateUrl: './videojuegosComp.component.html',
  styleUrls: ['./videojuegosComp.component.css']
})
export class VideojuegosComponent implements OnInit {

    id : number = 0
    titulo : string = ""
    compania : string = ""
    rating : number=0
    icono : string=""
    user : string =""
    enable : boolean=false;
    usuario: string = AppComponent.usuario
    videojuego : Videojuego | null = null
    
    static LVideojuegos: Videojuego[] =
                    [new Videojuego("Mass Effect 2", "Bioware", 8.5, "assets/img/masseffect2.jpg"), 
                     new Videojuego("Elden Ring", "From Software", 9, "assets/img/eldenring.jpg"),
                     new Videojuego("Hades", "Supergiant", 8, "assets/img/hades.png"), 
                     new Videojuego("League of Legends", "Riot", 7.5, "assets/img/lol.jpg")]

   lista: Videojuego[] = []

  constructor(route:ActivatedRoute) {
    this.lista=VideojuegosComponent.LVideojuegos
   }

  ngOnInit() {
  }

  public mostrarInfo(videojuego : Videojuego) : void{
    this.enable=true;
    this.id = videojuego.id
    this.titulo = videojuego.titulo
    this.compania = videojuego.compania
    this.rating = videojuego.rating
    this.icono=videojuego.icono
  }

  public quitarInfo():void{
    this.enable=false;
  }
}
