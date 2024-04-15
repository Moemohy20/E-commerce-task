import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable, distinctUntilChanged, map, skipWhile, take } from 'rxjs';

import { User } from './models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authStatusSub = new BehaviorSubject<User | null>(null);
  public currentUser = this.authStatusSub.asObservable().pipe(
    skipWhile(value => !value), // skip null values
    distinctUntilChanged(),
    take(1),
  );

  get user(): User {
    const obj = sessionStorage.getItem('USER_PROVIDER');
    return JSON.parse(obj || '{}') as User;
  }

  set user(user: User | undefined) {
    sessionStorage.setItem('USER_PROVIDER', JSON.stringify(user || {}));
  }

  constructor(private readonly auth: AngularFireAuth) {
    this.authStatusListener();
  }

  authStatusListener() {
    this.auth.onAuthStateChanged(credential => {
      const user = this.fromCredential(credential);
      if (credential) {
        this.authStatusSub.next(user);
      } else {
        this.authStatusSub.next(null);
      }
      this.user = user;
    });
  }

  get isAuthenticated(): Observable<boolean> {
    return this.auth.user.pipe(map(user => !!user));
  }

  // Sign in with email/password
  async signIn(email: string, password: string): Promise<void> {
    return await this.auth
      .signInWithEmailAndPassword(email, password)

      .then(() => {
        return this.authStatusListener();
      })

      .catch((error: any) => {
        throw new Error(error?.message || error);
      });
  }

  // Sign up with email/password
  async signUp(email: string, password: string): Promise<void> {
    return await this.auth
      .createUserWithEmailAndPassword(email, password)

      .then(() => {
        return this.authStatusListener();
      })

      .catch((error: any) => {
        throw new Error(error?.message || error);
      });
  }

  async signOut(): Promise<void> {
    return await this.auth
      .signOut()

      .then(() => {
        return this.authStatusSub.next(null);
      })

      .catch((error: any) => {
        throw new Error(error?.message || error);
      });
  }

  private fromCredential(userCredential: any): User {
    const user: User = {
      id: userCredential?.uid,
      email: userCredential?.email,
      username: userCredential?.displayName,
      image: userCredential?.photoURL,
    };
    return user;
  }
}
