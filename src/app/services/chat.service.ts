import { Mensaje } from '../sercvices/model/mensaje';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {
  chats: Mensaje[]= [];
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  private path = 'chats';

  constructor(private afs: AngularFirestore) {
  }
  cargarMensajes() {
    this.itemsCollection = this.afs.collection(this.path, ref => ref.orderBy('fecha','desc').limit(5));
    return this.itemsCollection.valueChanges()
    /*Trabaja con la respuesta de un observable la transforma y vuelve a regresar algo a lo cual nos podemos suscribir. Recibimos los mensajes que es la respuesta del observable*/
    .map( (mensajes: Mensaje[]) => {
      this.chats = [];
      for ( let mensaje of mensajes){
        this.chats.unshift(mensaje);
      }
      return this.chats;
    } );
  }

  agregarMensaje(texto: string) {
    const mensaje: Mensaje = {
      nombre: 'Demo',
      mensaje: texto,
      fecha: new Date()
    };
    return this.itemsCollection.add(mensaje);
  }

}
