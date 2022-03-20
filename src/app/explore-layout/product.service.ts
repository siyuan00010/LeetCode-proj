// Creat a service component to store backend info
//import { HttpClient } from "@angular/common/http";
import { exploreCate } from "./explore-item.model";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  items: Observable<Object[]>
  constructor(private db: AngularFireDatabase) {
    console.log("Setting up Fire Communication")
    this.items = this.db.list<exploreCate>('exploreCate').valueChanges();
  }
  public showData(){
    this.items.subscribe((data) => {
      console.log("Data Recieved");
      for (let item of data){
        console.log(item);
      }
    })
  }
  //get product info from backend
  //public getProducts() {
    //return this.http.get<exploreItemModel []>(this.baseUrl + this.productsEndPoint);
    //return this.db.list<exploreItemModel>("products").valueChanges();
  //}
  //public getProduct(index: number) {
    //return this.http.get<exploreItemModel []>(this.baseUrl + 'list/' + index + '.json');

  //}

}