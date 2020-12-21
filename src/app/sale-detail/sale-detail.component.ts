import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css']
})
export class SaleDetailComponent implements OnInit, OnChanges {
  public sale: any;
  @Input() id: number = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getSaleById(1);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.id);
  }

  getSaleById(id: number): void {
    this.httpClient.get(
      "http://www.nivaapi.com/api/Sale/" + id
    ).subscribe((data: any) => {
      this.sale = data;
    });
  }
}
