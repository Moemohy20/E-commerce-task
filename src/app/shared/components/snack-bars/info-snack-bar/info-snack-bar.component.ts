import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-info-snack-bar',
  templateUrl: './info-snack-bar.component.html',
  styleUrls: ['./info-snack-bar.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class InfoSnackBarComponent {
  public message: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) private readonly data: any) {
    this.message = this.data.message;
  }
}
