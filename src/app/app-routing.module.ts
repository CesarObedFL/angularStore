import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessComponent } from './access/access.component';
import { ProductComponent } from './product/product.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  { path: 'login', component: AccessComponent },
  { path: 'product/list', component: ProductComponent },
  { path: 'sales', component: SalesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
