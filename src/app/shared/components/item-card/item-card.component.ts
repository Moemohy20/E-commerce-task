import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  standalone: true,
  imports: [CurrencyPipe],
})
export class ItemCardComponent implements OnInit {
  @Input() item!: Item;

  constructor(
    private readonly router: Router,
    private readonly cartService: CartService,
  ) {}

  ngOnInit() {}

  onItemClick() {
    console.log('item clicked', this.item);
    this.router.navigate([`details/${this.item.id}`]);
  }

  addToCard(event: any) {
    event.stopPropagation();
    console.log('add to card', this.item);
    this.cartService.addToCart(this.item);
  }
}
