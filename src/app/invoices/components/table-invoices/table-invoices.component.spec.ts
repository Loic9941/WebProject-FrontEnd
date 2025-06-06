import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInvoicesComponent } from './table-invoices.component';

describe('TableInvoicesComponent', () => {
  let component: TableInvoicesComponent;
  let fixture: ComponentFixture<TableInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableInvoicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
