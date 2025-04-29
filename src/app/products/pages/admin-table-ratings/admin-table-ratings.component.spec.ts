import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTableRatingsComponent } from './admin-table-ratings.component';

describe('AdminTableRatingsComponent', () => {
  let component: AdminTableRatingsComponent;
  let fixture: ComponentFixture<AdminTableRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTableRatingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTableRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
