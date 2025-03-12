import { TestBed } from '@angular/core/testing';

import { TableProductsService } from './table-products.service';

describe('TableProductsService', () => {
  let service: TableProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
