import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { NotificationsService } from 'angular2-notifications';
import { CartService } from '../cart/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: Product[];
  addedProduct: string;
  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private notificationsService: NotificationsService,
    private cartService: CartService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getProducts(params['seoUrl']);
    })

  }

  getProducts(seoUrl: string) {
    this.productService.getProducts(seoUrl).subscribe(p => {
      this.products = p;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.notificationsService.success('Successfull', product.productName + " added to cart");
  }

}
