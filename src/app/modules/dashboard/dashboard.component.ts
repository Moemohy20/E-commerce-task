import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth';
import { ItemsService } from '../../core/services/items.service';
import { ItemCardComponent } from '../../shared/components/item-card/item-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, ItemCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  items = this.itemsService.items;
  constructor(
    private readonly auth: AuthService,
    private readonly itemsService: ItemsService,
  ) {
    this.itemsService.getItems();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('items', this.items.value);
  }
}
