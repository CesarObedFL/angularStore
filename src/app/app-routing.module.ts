import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessComponent } from './access/access.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'login', component:AccessComponent },
  { path: 'product/list', component:ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
