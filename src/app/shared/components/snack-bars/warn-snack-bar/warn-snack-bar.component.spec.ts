import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnSnackBarComponent } from './warn-snack-bar.component';

describe('WarnSnackBarComponent', () => {
  let component: WarnSnackBarComponent;
  let fixture: ComponentFixture<WarnSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarnSnackBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarnSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
