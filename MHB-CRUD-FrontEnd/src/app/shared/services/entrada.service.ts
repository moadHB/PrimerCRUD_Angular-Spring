import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrada } from '../interfaces/entrada';

const headers = new HttpHeaders();
headers.set("Access-Control-Allow-Origin","http://localhost:80/listado");
headers.set(" Access-Control-Allow-Methods ","POST, GET, OPTIONS, DELETE, PUT");
headers.set("Access-Control-Allow-Headers" ,"append,delete,entries,foreach,get,has,keys,set,values,Authorization");

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  private  header:HttpHeaders;

  constructor(private httpClient: HttpClient) {

  }

  public recuperarEntradas(): Observable<Entrada[]> {

    return this.httpClient.get<Entrada[]>('http://localhost:8080/users', {headers:headers});
  }

  public añadirPersona(): Observable<Entrada[]> {

    return this.httpClient.get<Entrada[]>('http://localhost:8080/addUser');
  }

  public eliminarPersona(id:number): Observable<Entrada[]>{
    return this.httpClient.get<Entrada[]>('http://localhost:8080/deleteUser/'+id.toString(),{headers:headers});
  }

  public actualizarPersona(persona:Entrada): Observable<Entrada[]>{
    return this.httpClient.post<Entrada[]>('http://localhost:8080/updateUser/'+persona.id.toString(),{
      "name":persona.name,
      "lastName":persona.lastName,
      "city":persona.city,
      "age":persona.age
    },{headers:headers});
  }

}

