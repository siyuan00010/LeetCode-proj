// Creat a service component to store backend info
//import { HttpClient } from "@angular/common/http";
import { exploreItemModel } from "./explore-item.model";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor(private db:AngularFireDatabase){

}
//get product info from backend
  public getProducts(){
    //return this.http.get<exploreItemModel []>(this.baseUrl + this.productsEndPoint);
    return this.db.list<exploreItemModel>("products").valueChanges();
  }
   public getProduct(index:number){
    //return this.http.get<exploreItemModel []>(this.baseUrl + 'list/' + index + '.json');
    
  }
      
}