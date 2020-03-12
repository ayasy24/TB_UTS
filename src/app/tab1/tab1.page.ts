import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { UtilsService } from '../services/utils.service';
import { products } from '../products';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listProducts = [];

  slideOpts = {
    initialSlide: 1,
    speed:400,
    autoplay: true
  };

  slideOpts2 = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1.5,
  };



  constructor(
    private cart: CartService,
    private utils: UtilsService
  ) {
    this.listProducts = products;
    console.log(products);
    console.log(this.listProducts);
  }

  beli(product){
    console.log('Anda melakukan klik pada ' + product.title);
    this.utils.showToast('Anda membeli ' + product.title);
    this.cart.addToCart(product);
  }
  // add(data){
  //   console.log('Anda melakukan klik pada' +data.name);
  //   this.utils.showToast('Anda Berhasil membeli' +data.name);
  //   this.cart.addToCart(data);
  // }
  // goPreview(item){
  //   this.router.navigate(['/preview/' + item]);
  // }

  }