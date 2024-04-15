import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-loading-snack-bar',
  templateUrl: './loading-snack-bar.component.html',
  styleUrls: ['./loading-snack-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class LoadingSnackBarComponent {
  public message: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) private readonly data: any) {
    this.message = this.data.message;
  }
}
