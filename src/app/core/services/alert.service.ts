import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ErrorSnackBarComponent,
  InfoSnackBarComponent,
  LoadingSnackBarComponent,
  SuccessSnackBarComponent,
  WarnSnackBarComponent,
} from '../../shared/components/snack-bars';
import { Alert, AlertType } from '../../shared/models/alert.model';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private statusSubject = new Subject<Alert>();
  public status: Observable<Alert> = this.statusSubject.asObservable();

  constructor(private readonly snackBar: MatSnackBar) {
    this.status.subscribe(alert => this.onSubscribe(alert));
  }

  private onSubscribe(alert: Alert): void {
    // there is a message to show, so change snackbar style to match the message type
    if (!alert.text) return;

    switch (alert.type) {
      case AlertType.LOADING:
        this.snackBar.openFromComponent(LoadingSnackBarComponent, {
          duration: 0,
          verticalPosition: 'top',
          data: {
            message: alert.text,
          },
        });
        break;
      case AlertType.ERROR:
        this.snackBar.openFromComponent(ErrorSnackBarComponent, {
          duration: 0,
          verticalPosition: 'top',
          data: {
            message: alert.text,
          },
        });
        break;
      case AlertType.WARN:
        this.snackBar.openFromComponent(WarnSnackBarComponent, {
          duration: 5 * 1000,
          verticalPosition: 'top',
          data: {
            message: alert.text,
          },
        });
        break;
      case AlertType.SUCCESS:
        this.snackBar.openFromComponent(SuccessSnackBarComponent, {
          duration: 5 * 1000,
          verticalPosition: 'top',
          data: {
            message: alert.text,
          },
        });
        break;
      case AlertType.INFO:
        this.snackBar.openFromComponent(InfoSnackBarComponent, {
          duration: 5 * 1000,
          verticalPosition: 'top',
          data: {
            message: alert.text,
          },
        });
        break;
    }
  }

  loading(message: string): void {
    this.statusSubject.next({ type: AlertType.LOADING, text: message });
  }

  error(message: string): void {
    this.statusSubject.next({ type: AlertType.ERROR, text: message });
  }

  warn(message: string): void {
    this.statusSubject.next({ type: AlertType.WARN, text: message });
  }

  success(message: string): void {
    this.statusSubject.next({ type: AlertType.SUCCESS, text: message });
  }

  info(message: string): void {
    this.statusSubject.next({ type: AlertType.INFO, text: message });
  }

  dismiss(): void {
    this.snackBar.dismiss();
  }
}
