import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { exploreCate } from './explore-layout/explore-item.model';
import { mock_product_list } from './explore-layout/mock_product_list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LeetCode-project';
  products: exploreCate [] = [];
  constructor(){
  for (var product of mock_product_list){
    //console.log(product);
    this.products.push(product);
  }
}
  // items: Observable<any[]>;
  // constructor(db: AngularFireDatabase) {
  //   this.items = db.list('items').valueChanges();
  // }
}
