import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./customer/customer.component";
import {ProductsComponent} from "./products/products.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path : "customers", component : CustomerComponent},
  {path : "products", component : ProductsComponent, canActivate : [AuthGuard], data : {roles:['ADMIN']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
