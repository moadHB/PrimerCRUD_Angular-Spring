import { Component, Input, OnInit } from '@angular/core';
import { EntradaService } from './../../shared/services/entrada.service';
import { Entrada } from 'src/app/shared/interfaces/entrada';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoEntradas: Entrada[];



  constructor(private entradaService: EntradaService) {
    this.listadoEntradas = [ ];

  }

  ngOnInit(): void {
    this.listarEntradas();
  }


  public listarEntradas(): void {

    this.entradaService.recuperarEntradas().subscribe(
      (entradas: Entrada[]) => {
        this.listadoEntradas = entradas;
      },
      (e: Error) => {
        throw e;
      },
      () => {
        console.log('Petición realizada correctamente');
      }
    );
  }

  public aniadir(): void {

    this.entradaService.añadirPersona().subscribe(
      (entradas: Entrada[]) => {
        this.listadoEntradas = entradas;
      },
      (e: Error) => {
        throw e;
      },
      () => {
        console.log('Petición realizada correctamente');
      }
    );
  }

  public eliminar(id : number): void{
    this.entradaService.eliminarPersona(id).subscribe(
      (entradas: Entrada[]) => {
        this.listadoEntradas = entradas;
      },
      (e: Error) => {
        console.log(e);
      },
      () => {
        console.log('Petición realizada correctamente');
      }
    );

  }

  public actualizar(persona:any): void{

    this.entradaService.actualizarPersona(persona).subscribe(
      (entradas: Entrada[]) => {
        this.listadoEntradas = entradas;
      },
      (e : Error) => {
        throw e;
      },
      () => {
        console.log('Petición realizada correctamente');
      }
    );

  }


}
