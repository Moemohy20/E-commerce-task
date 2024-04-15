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
import { AuthService } from '../../auth.service';

@Component({
  selector: 'auth-sign-up',
  templateUrl: './sign-up.component.html',
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
})
export class AuthSignUpComponent {
  signUpForm: FormGroup;

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {
    this.signUpForm = this.fb.nonNullable.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  async signUp(): Promise<void> {
    if (this.signUpForm.valid) {
      const { email, password } = this.signUpForm.value;

      try {
        await this.authService.signUp(email, password);
        window.alert('Sign up successful 🎉');

        await this.router.navigate(['sign-in']);
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
