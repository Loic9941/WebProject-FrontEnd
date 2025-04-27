import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBestValueComponent } from './table-best-value.component';

describe('TableBestValueComponent', () => {
  let component: TableBestValueComponent;
  let fixture: ComponentFixture<TableBestValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableBestValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBestValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
