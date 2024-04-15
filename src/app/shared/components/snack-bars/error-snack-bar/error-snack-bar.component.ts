import { Component, Inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-snack-bar',
  templateUrl: './error-snack-bar.component.html',
  styleUrls: ['./error-snack-bar.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class ErrorSnackBarComponent implements OnInit {
  public message!: string;

  constructor(
    private readonly snackBarRef: MatSnackBarRef<ErrorSnackBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) private readonly data: any,
  ) {}

  ngOnInit(): void {
    this.message = this.data.message ?? '';
  }

  onDismiss(): void {
    this.snackBarRef.dismiss();
  }
}
