import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SimpleNotificationsModule, NotificationsService} from 'angular2-notifications';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    AccountComponent,
    ShippingDetailComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    {provide:'apiUrl',useValue:'http://northwindapi.azurewebsites.net/api/'},
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
