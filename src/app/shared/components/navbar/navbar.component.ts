import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
})
export class NavbarComponent {
  websiteName: string = 'Hatolly';
  isLogin: boolean = true;

  cartCount = this.cartService.cartItems;
  constructor(private readonly cartService: CartService) {
    // private _AuthService: AuthService, // private _Router: Router, // private _AngularFireAuth: AngularFireAuth,
    // this._AuthService.currentUser.subscribe((data) => {
    //   if (data && data !== null) {
    //     this.isLogin = true;
    //   } else {
    //     this.isLogin = false;
    //   }
    // });
    console.log('this.cartService.cartItems', this.cartService.cartItems);

    this.cartService.cartItems.subscribe(data => {
      console.log('cart items', data);
    });
  }
  // ngOnInit(): void {}
  onLogOut() {
    // this._AuthService.signOut();
  }
}
