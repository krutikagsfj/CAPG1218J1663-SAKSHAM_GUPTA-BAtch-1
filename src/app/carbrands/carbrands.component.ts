import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from 'src/app/productservice.service';

@Component({
  selector: 'app-carbrands',
  templateUrl: './carbrands.component.html',
  styleUrls: ['./carbrands.component.css']
})
export class CarbrandsComponent implements OnInit {

  title = 'Welcome to Product Brand Page of this Application';
  constructor(private ps:ProductserviceService) { }

  productdata:Object;
  ngOnInit() {
    this.ps.getProductDetails().subscribe(res=>
      {
        this.productdata=res;
        console.log(this.productdata);
      }),err=>
      {
        console.log(err);
      }
  }

}
