import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRatingComponent } from './table-rating.component';

describe('TableRatingComponent', () => {
  let component: TableRatingComponent;
  let fixture: ComponentFixture<TableRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
