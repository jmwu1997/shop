import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CollectionComponent } from './collection/collection.component';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { HomeFeatureComponent } from './home/home-feature/home-feature.component';
import { CollectionBannerComponent } from './collection/collection-banner/collection-banner.component';
import { CollectionFeaturesComponent } from './collection/collection-features/collection-features.component';
import { ViewcartItemComponent } from './viewcart/viewcart-item/viewcart-item.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    CartComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent,
    RegisterComponent,
    LoginComponent,
    ShopComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    CheckoutComponent,
    ViewcartComponent,
    CollectionComponent,
    HomeCarouselComponent,
    HomeFeatureComponent,
    CollectionBannerComponent,
    CollectionFeaturesComponent,
    ViewcartItemComponent,
    UserComponent,
    NavComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
