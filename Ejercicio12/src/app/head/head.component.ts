import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class headComponent implements OnInit {
  username : string
  usuario: string = AppComponent.usuario;

  constructor(route:ActivatedRoute) {
    this.username =route.snapshot.params["username"]
  }
  ngOnInit() {
  }
}
