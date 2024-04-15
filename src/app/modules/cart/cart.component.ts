import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../core/services/cart.service';
import { Item } from '../../shared/models/item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatIconModule, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems = this.cartService.cartItems;

  cartQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private readonly cartService: CartService) {} // console.log('ggg');

  removeFromCart(item: Item) {
    console.log('item', item);
    this.cartService.removeFromCart(item);
  }
}
