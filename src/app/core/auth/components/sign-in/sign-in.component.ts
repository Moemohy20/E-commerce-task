import { NgIf } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../..';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
  // providers: [AuthService],
})
export class AuthSignInComponent {
  signInForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {
    this.signInForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  async signIn(): Promise<void> {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;

      try {
        await this.authService.signIn(email, password);
        await this.router.navigate(['']);
      } catch (error: any) {
        window.alert(error?.message || error);
      }
    } else {
      window.alert(
        [
          'Invalid input format 😿.',
          'You can always recover your password by 😼👉 the "Forgot Password?" Link',
        ].join('\n'),
      );
    }
  }
}
