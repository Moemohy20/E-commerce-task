import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { ItemsService } from '../../core/services/items.service';
import { Item } from '../../shared/models/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
  standalone: true,
  imports: [CurrencyPipe],
})
export class ItemDetailsComponent implements OnInit {
  itemId: number;
  item: Item | undefined;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly itemsService: ItemsService,
    private readonly cartService: CartService,
  ) {
    this.itemId = this.activatedRoute.snapshot.params['id'];
    // this.item = this.itemsService.items.value.find(item => item.id == this.itemId);
    // console.log('itemid', this.itemId, this.item);
  }

  async ngOnInit() {
    console.log('on init item-details');

    // this.item = this.itemsService.items.value.find(item => item.id == this.itemId);

    this.item = await this.itemsService.getItem(this.itemId);

    console.log('itemid', this.itemId, this.item);
  }
  addToCard(event: any) {
    event.stopPropagation();
    console.log('add to card', this.item);
    this.cartService.addToCart(this.item!);
  }
}
