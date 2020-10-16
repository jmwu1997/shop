import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from '../home/home.component';
import { ShopComponent } from '../shop/shop.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ViewcartComponent } from '../viewcart/viewcart.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { CollectionComponent } from '../collection/collection.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'shop',component:ShopComponent},
  {path:'about',component:AboutComponent},
  {path:'viewcart',component:ViewcartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'collection',component:CollectionComponent},
  {path:'user',component:UserComponent}

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


