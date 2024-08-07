import { Injectable } from '@angular/core';
import { Importss } from './model/imports';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImportsService {
  url : string;
  imports : Importss;
  importsArr : any;
  
  constructor(private http:HttpClient) {
    this.url = "http://localhost:3004/imp";
    this.imports = new Importss();

    
   }
   insertImports( imports : Importss){
    this.http.post<Importss>(this.url,imports).subscribe();
    return "imports Details Added";
   }

   updateImports(imports : Importss){
    this.http.put<Importss>(this.url+"/"+imports.id,imports).subscribe()
    return "imports Details Updated";

   }

   deleteImports(id : number){
    this.http.delete<Importss>(this.url+"/"+id).subscribe();
    return "imports Details Deleted";
   }

   findImports(id : number){
    this.http.get<Importss>(this.url+"/"+id).subscribe(data => this.imports = data);
    return this.imports;
    
   }

   findAllImports(){
    this.http.get<Importss>(this.url).subscribe(data => this.importsArr = data);
    return this.importsArr;
    
   }
}
