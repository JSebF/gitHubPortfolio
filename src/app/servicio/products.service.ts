import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient ) {

   }
   public getProductsIdx(){
     return this.http.get('https://portfolioapp-d4fca-default-rtdb.firebaseio.com/productos_idx.json');
   }
   public getProducts(){
     return this.http.get('https://portfolioapp-d4fca-default-rtdb.firebaseio.com/productos.json');
   }
   public getProduct(id: string){
     return this.http.get(`https://portfolioapp-d4fca-default-rtdb.firebaseio.com/productos/${ id }.json`);
   }
}
