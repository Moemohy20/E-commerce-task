import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-success-snack-bar',
  templateUrl: './success-snack-bar.component.html',
  styleUrls: ['./success-snack-bar.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class SuccessSnackBarComponent {
  public message: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) private readonly data: any) {
    this.message = this.data.message;
  }
}
