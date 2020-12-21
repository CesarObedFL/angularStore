import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  public sales: any[] = [];
  public showModal: boolean = false;
  public selectedId: number = -1;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllSales();
  }

  getAllSales(): void {
    this.httpClient.get(
      "http://www.nivaapi.com/api/Sale/all"
    ).subscribe((data: any) => {
      this.sales = data
    });
  }

  getSaleById(id: number): void {
    this.selectedId = id;
    this.showModal = true;
  }
}
