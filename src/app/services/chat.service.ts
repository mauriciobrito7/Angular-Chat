import { Mensaje } from '../sercvices/model/mensaje';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable()
export class ChatService {
  chats: Mensaje[]= [];
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  private path = 'chats';
  public usuario: any = {};
  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    /*Vamos a estar esuchando cualquier cambio que suceda en el estado de la autenticación*/
    this.afAuth.authState.subscribe( user => {
      console.log('Estado del usuario:', user);
      if ( !user ) {
        return;
      }
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    });
  }
  // Login social con gmail y twitter
  login( proveedor: string ) {
    if ( proveedor === 'google' ) {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }else {
      this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }
  }
  // Salir de la sesión
  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection(this.path, ref => ref.orderBy('fecha','desc').limit(5));
    return this.itemsCollection.valueChanges()
    // tslint:disable-next-line:max-line-length
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
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date(),
      uid: this.usuario.uid
    };
    return this.itemsCollection.add(mensaje);
  }

}
