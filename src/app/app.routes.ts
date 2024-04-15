import { Route } from '@angular/router';
// import { AngularFireAuthGuard, isNotAnonymous,  } from '@angular/fire';

// import {} from '@angular/fire';
// import {
//   AngularFireAuthGuard,
//   hasCustomClaim,
//   redirectUnauthorizedTo,
//   redirectLoggedInTo,
// } from '@angular/fire/auth-guard';
import { AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['sign-in']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['']);

export const appRoutes: Route[] = [
  {
    path: 'sign-in',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },

    loadChildren: () => import('./core/auth/components/sign-in/sign-in.routes'),
  },
  {
    path: 'sign-up',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
    loadChildren: () => import('./core/auth/components/sign-up/sign-up.routes'),
  },

  {
    path: '',
    canActivate: [AuthGuard],
    // data: { authGuardPipe: redirectLoggedInToDashboard },
    loadChildren: () => import('./modules/dashboard/dashboard.routes'),
  },

  {
    path: 'details/:id',
    canActivate: [AuthGuard],
    // data: { authGuardPipe: redirectLoggedInToDashboard },
    loadChildren: () => import('./modules/item-details/item-details.routes'),
  },

  {
    path: 'cart',
    canActivate: [AuthGuard],
    // data: { authGuardPipe: redirectLoggedInToDashboard },
    loadChildren: () => import('./modules/cart/cart.routes'),
  },

  // 404 & Catch all
  {
    path: '404-not-found',
    pathMatch: 'full',
    loadChildren: () => import('./shared/components/errors/error-404/error-404.routes'),
  },
  { path: '**', redirectTo: '404-not-found' },
];
