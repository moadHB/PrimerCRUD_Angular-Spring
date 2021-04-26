import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MHB-CRUD-FrontEnd';
  titulo:String;
   i:number ;
   txt:string ; /* The text */

  constructor(){
    this.titulo="";
    this.i= 0;
    this.txt= "Mi Primer Crud en Angular y Spring";
  }

  public typeWriter():void {
    if (this.i < this.txt.length) {
      this.titulo += this.txt.charAt(this.i);
      this.i++;
      setTimeout(()=>this.typeWriter(),100);
    }

  }
  ngAfterViewInit():void{
    this.typeWriter();
  }
}
