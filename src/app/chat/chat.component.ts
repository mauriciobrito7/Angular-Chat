import { ChatService } from '../services/chat.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  mensaje: string;
  mensajes: Observable<any>;
  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.mensajes = this.chat.cargarMensajes();
    this.mensajes.subscribe(() => {
      this.mensajes = this.chat.cargarMensajes();
    });
  }

  enviarMensaje() {
    if (this.mensaje.length === 0) {
      return;
    }

    this.chat.agregarMensaje(this.mensaje)
      .then( () => console.log('mensaje enviado') )
      .catch( (err) => console.log(err) );
  }

}
