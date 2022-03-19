// Creat a service component to store backend info
// import { HttpClient } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire/";
import { exploreItemModel } from "./explore-item.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl:string= "https://leetcode-590a6-default-rtdb.firebaseio.com/.jason";
  private productsEndPoint:string="exploreCategory.jason";
  constructor(private db:){
    
  }
//get product info from backend
  public getProducts(){
    //return this.http.get<exploreItemModel []>(this.baseUrl + this.productsEndPoint);
  
  }
   public getProduct(index:number){
    //return this.http.get<exploreItemModel []>(this.baseUrl + 'list/' + index + '.json');
  
  }
      
}