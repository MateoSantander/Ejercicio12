import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  email : string="jasjas@haboohotel.com"
  numero : string = "11811"

  constructor() { }

  ngOnInit() {
  }

}