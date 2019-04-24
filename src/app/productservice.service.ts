import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }
  getProductDetails()
  {
    let url="assets/productBrands.json";
    return this.http.get(url);
  }
}
