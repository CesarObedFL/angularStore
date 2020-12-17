import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public catalog: any[] = [];
  public products: any[] = [];
  public selectedProduct: any;

  public discount: number = 5;
  public subtotal: number = 0.0;
  public total: number = 0.0;

  constructor(private productService: ProductService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.httpClient.get(
      "http://www.nivaapi.com/api/product"
      ).subscribe((data:any) => {
        this.catalog = data
      });
  }

  addProduct(): void {
    let i = this.products.findIndex(item => item.productId == this.selectedProduct);
    if (i > -1) {
      this.products[i].amount++;
      this.validateStock(this.products[i].productId);
    } else {
      let index = this.catalog.findIndex(item => item.productId == this.selectedProduct && item.totalStock > 0);
      this.products.push({
        productId: this.catalog[index].productId,
        code: this.catalog[index].internalCode,
        description: this.catalog[index].description,
        amount: 1,
        stock: this.catalog[index].totalStock,
        salePrice: this.catalog[index].salePrice
      });
    }
    this.getTotal();
  }

  getTotal(): void {
    this.subtotal = 0.0;
    this.products.forEach(item => { this.subtotal += (item.amount * item.salePrice) });
    let discount = this.subtotal * (this.discount / 100);
    this.total = this.subtotal - discount;
  }

  removeProduct(productId: number): void {
    let index = this.products.findIndex(item => item.productId == productId);
    this.products.splice(index, 1);
    this.getTotal();
  }

  validateStock(productId: number): void {
    let product = this.products.find(item => item.productId == productId);
    if (product.amount > product.stock) {
      product.amount = product.stock;
    }
    this.getTotal();
  }

}
