import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../products';
import {PhoneService } from '../services/phone.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {
  items = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private phoneService: PhoneService) {
    // this.items = products;
    // console.log(products);
    // console.log(this.items);
   }
  
  getData(){
    this.items = this.phoneService.getPhone();
  }


  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getData();
  }

}
