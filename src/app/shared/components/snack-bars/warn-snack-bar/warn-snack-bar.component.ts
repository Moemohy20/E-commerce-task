import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-warn-snack-bar',
  templateUrl: './warn-snack-bar.component.html',
  styleUrls: ['./warn-snack-bar.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class WarnSnackBarComponent {
  public message: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) private readonly data: any) {
    this.message = this.data.message;
  }
}
