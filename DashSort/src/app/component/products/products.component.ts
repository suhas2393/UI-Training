import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productList : any;
  constructor(private api:ApiService){}



}
