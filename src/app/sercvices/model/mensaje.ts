export interface Mensaje {
  nombre: string;
  mensaje: string;
  fecha?: Date;
  uid?: string;
}

export class Mensaje implements Mensaje {
  constructor( public nombre: string, public mensaje: string, public fecha?: Date, public id?: string) {}
}
