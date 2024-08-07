import { Component } from '@angular/core';
import { Importss } from './model/imports';
import { ImportsService } from './imports.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Imp';
  imports : Importss;
  result : string;
  importsArr : Importss[];
  flag : boolean;
  

  constructor(private service : ImportsService){
    this.imports = new Importss();
    this.result =" ";
    this.importsArr = [];
    this.flag = false;
  }

  insertImports(data : any) {
    this.imports.id = data.contno;
    this.imports.prodname = data.prodname;
    this.imports.quantity = data.quantity;
    this.imports.price = data.price;
    alert(data.contno+" "+data.prodname+" "+data.quantity +" " + data.price);
    this.result = this.service.insertImports(this.imports);
  }

  updateImports(data : any){
    this.imports.id = data.contno;
    this.imports.prodname = data.prodname; 
    this.imports.quantity = data.quantity;
    this.imports.price = data.price;
    alert(data.contno+" "+data.prodname+" "+data.quantity + " " + data.price);
    this.result = this.service.updateImports(this.imports);

  }

  deleteImports(data : any){
    this.result = this.service.deleteImports(data.contno);
  }

  findImports(data : any){
    this.imports =this.service.findImports(data.contno);
    this.result = this.imports.id + " " + this.imports.prodname + " " + this.imports.quantity + this.imports.price;
  }

  findAllImports(){
   this.importsArr = this.service.findAllImports();
   this.flag = true;
  }
}
