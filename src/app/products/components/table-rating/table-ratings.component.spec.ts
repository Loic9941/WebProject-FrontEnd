import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRatingsComponent } from './table-ratings.component';

describe('TableRatingsComponent', () => {
  let component: TableRatingsComponent;
  let fixture: ComponentFixture<TableRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRatingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
