import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { Item } from '../../shared/models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  items = new BehaviorSubject<Item[]>([]);

  constructor(private readonly httpClient: HttpClient) {}

  addItem(item: Item) {}

  async getItems() {
    const newItems = await firstValueFrom(
      this.httpClient.get<Item[]>('https://fakestoreapi.com/products'),
    );
    console.log('get items', newItems);

    this.items.next(newItems);
  }

  async getItem(id: number): Promise<Item> {
    return await firstValueFrom(
      this.httpClient.get<Item>(`https://fakestoreapi.com/products/${id}`),
    );
  }

  updateItem(item: Item) {}

  deleteItem(item: Item) {}

  clearItems() {}
}
