import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { AuthSignInComponent } from './core/auth/components/sign-in/sign-in.component';
import { AuthSignUpComponent } from './core/auth/components/sign-up/sign-up.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    NavbarComponent,
    AuthSignInComponent,
    AuthSignUpComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started: ', event.url);
      }
      if (event instanceof NavigationEnd) {
        console.log('Navigation ended: ', event.url);
      }
    });
  }
}
