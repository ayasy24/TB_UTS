import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  phone = [];

  constructor() { 
    this.getPhone();
  }

  addPhone(product){
    this.phone.push(product);
    console.log(product);
  }

  getPhone(){
    return this.phone;
  }
}
