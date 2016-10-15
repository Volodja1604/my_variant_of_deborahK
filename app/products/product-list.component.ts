import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from "./product.service";
import {error} from "util";

@Component({
    selector:'pm-products',
    templateUrl:'app/products/product-list.component.html',
    styleUrls:[ 'app/products/product-list.component.css']


})
export class ProductListComponent implements  OnInit{
    pageTitle:string="Product LIst";
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    listFilter:string='';
    errorMessage:string;
    onKeyup(value) {
        this.listFilter = value;
    }
    products:Product[];
    constructor(private productService:ProductService){

    }
    toggleImage():void{
        this.showImage=!this.showImage;
    }
    ngOnInit():void{
        this.productService.getProducts()
            .subscribe(products=>this.products=products,
                    error=>this.errorMessage=<any>error);

    }
    onRatingClicked(message:string):void{
        this.pageTitle="Product List "+message;
    }

}