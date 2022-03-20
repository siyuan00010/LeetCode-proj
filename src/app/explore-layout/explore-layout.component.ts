import { Component } from "@angular/core";
import { mock_product_list } from "./mock_product_list";
import { exploreCate } from "./explore-item.model"
import { ProductsService } from "./product.service";


@Component({
    selector: 'lc-explore-layout',
    templateUrl:'explore-layout.component.html',
})
export class ExploreLayoutComponent{
    //products: exploreItemModel[] = [];
    
    constructor(private productsService:ProductsService, private dbService:ProductsService) {
      dbService.showData();
        // for (var product of mock_product_list){
        //     console.log(product);
        //     this.products.push(product);
        // }
    }
    // onUpdataExploreCate(data:exploreCate){

    // }
    // ngOnInit():void {
    //     //throw new Error("Method not implemented.");
    //     this.productsService.getProducts().subscribe(data => {
    //         console.log("Fetching product data");
    //         //console.log(data);
    //         for (var product of data){
    //             console.log(product);
    //         }

    //     })

    // }


}