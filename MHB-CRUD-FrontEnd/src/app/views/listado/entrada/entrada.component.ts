import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';


@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  @Input()
  entrada :Entrada;
  @Input()
  entradas :Entrada[];
  @Output()
  usuarioSeleccionado: EventEmitter<any>;
  @Output()
  usuarioEliminado: EventEmitter<any>;

  usuario: Entrada[];

  onUsuarioSeleccionado(id:number ) {

    let salida={
      id:id,
      name:this.usuario[id].name,
      lastName:this.usuario[id].lastName,
      city:this.usuario[id].city,
      age: this.usuario[id].age
    };
    this.usuarioSeleccionado.emit(salida);
  }

  onUsuarioEliminado(id:number) {
    this.usuarioEliminado.emit(id);
  }

  constructor() {
    this.entrada = {
      lastName: "",
      city: "",
      name: "",
      id: 0,
      age: 0
    }
    this.usuarioSeleccionado = new EventEmitter<any>();
    this.usuarioEliminado = new EventEmitter<any>();
    this.usuario=[];
  }

  ngOnInit():void{}
  ngOnChanges():void{
    this.entradas.forEach(element => {
      this.usuario[(Number.parseInt(element.id.toString()))]=element;
    });

  }

}
