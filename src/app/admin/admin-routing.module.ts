import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    {path:"", component:LandingComponent, children:[
    {path:"", component:DashboardComponent},
    {path:"dashboard", component:DashboardComponent},
    {path:"addproduct", component:AddProductComponent},
    { path: 'add-product/:id', component: AddProductComponent },
    {path:"product", component:ProductComponent}
]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
