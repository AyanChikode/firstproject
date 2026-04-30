import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductComponent } from './admin/product/product.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path:'allproducts', component:AllProductsComponent},
  {path:'login', component:LoginComponent},
  {path:'productsinfo/:id',component:ProductInfoComponent},
  {path:'cart', component:CartComponent},
  {path:'admin' , loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)}

    

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
