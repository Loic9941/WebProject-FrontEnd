import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBestRatedComponent } from './table-best-rated.component';

describe('TableBestRatedComponent', () => {
  let component: TableBestRatedComponent;
  let fixture: ComponentFixture<TableBestRatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableBestRatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBestRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
