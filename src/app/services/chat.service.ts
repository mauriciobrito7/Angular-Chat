import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {
  chats: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
  }
  cargarMensajes() {
    this.itemsCollection = this.afs.collection('chats');
    return this.itemsCollection.valueChanges();
  }

}
