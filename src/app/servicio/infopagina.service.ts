import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  constructor( private http: HttpClient) { 
  this.getinfoPag();
  this.getinfoEquipo();
}

public getinfoPag(){
  // return this.http.get('https://portfolioapp-d4fca-default-rtdb.firebaseio.com/equipo.json')
  return this.http.get('assets/data/infoPag.json')
}

public getinfoEquipo(){
  return this.http.get('https://portfolioapp-d4fca-default-rtdb.firebaseio.com/equipo.json')
}

}
