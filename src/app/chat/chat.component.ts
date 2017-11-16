import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  mensaje: string;
  myCollectionObservable: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  this.myCollectionObservable = this.db.collection('chats').valueChanges();
  }

  enviarMensaje(mensaje: string) {
    console.log(mensaje);
  }

}
