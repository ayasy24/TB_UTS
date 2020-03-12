import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  title = "Keranjang";
  items = [];

  constructor(
    private router: Router,
    private cart: CartService
    // private utils: UtilsService
  ) { }
  // {
  //     this.listProducts = products;
  //     console.log(products);
  //     console.log(this.listProducts);    
  // }

  ngOnInit() {
    this.ambildata();
    console.log(this.items);
  }
  ambildata(){
    this.items = this.cart.getItems();
  }
  beli(){
    console.log('Lanjut Pembelian');
    this.router.navigate(['/pembelian']);
  }
  kosongkan(){
    this.cart.clearCart();
    this.ambildata();
  }
}
