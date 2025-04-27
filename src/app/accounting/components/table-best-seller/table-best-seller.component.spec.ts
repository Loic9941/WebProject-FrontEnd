import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBestSellerComponent } from './table-best-seller.component';

describe('TableBestSellerComponent', () => {
  let component: TableBestSellerComponent;
  let fixture: ComponentFixture<TableBestSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableBestSellerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBestSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
