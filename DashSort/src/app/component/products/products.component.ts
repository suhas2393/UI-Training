import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList : any;

  constructor(private api:ApiService){}

  ngOnInit(){
    this.api.getProduct().subscribe((res)=>{
      this.productList = res;
    })
  }


}
