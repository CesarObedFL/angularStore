import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: any;

  constructor(private httpClient: HttpClient) { }

  getAllProducts() {
    this.httpClient.get(
      "http://www.nivaapi.com/api/product"
      ).subscribe((data) => {
        this.products = data
      });
  }
}
