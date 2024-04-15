import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../../shared/models/item.model';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // cartItems: any[] = [];

  cartItems = new BehaviorSubject<Item[]>([]);

  constructor(private readonly alertService: AlertService) {
    console.log('local storage', JSON.parse(localStorage.getItem('cartItems')!));

    if (localStorage.getItem('cartItems')) {
      this.cartItems.next(JSON.parse(localStorage.getItem('cartItems')!));
    }
  }

  addToCart(item: Item) {
    //!Todo: check if already exist on reload
    console.log('cartItems', this.cartItems.value);

    if (!this.cartItems.value.find(i => i.id === item.id)) {
      console.log('inside if 2');

      this.cartItems.next([...this.cartItems.value, item]);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems.value));
      this.alertService.success('Added to cart!');
    } else {
      this.alertService.error('Already added!');
    }

    console.log('cartItems', this.cartItems.value);
  }

  getCart() {}

  removeFromCart(item: Item) {
    const newCart = this.cartItems.value.filter(i => i.id !== item.id);
    this.cartItems.next(newCart);
    localStorage.setItem('cartItems', JSON.stringify(newCart));
  }

  clearCart() {}
}
