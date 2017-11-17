import { ChatService } from '../../services/chat.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private chat: ChatService) { }

  ngOnInit() {
  }

  ingresar( proveedor: string ) {
    console.log(proveedor);
    // llamar autenticación
    this.chat.login(proveedor);
  }

}
