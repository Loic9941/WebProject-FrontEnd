import { TestBed } from '@angular/core/testing';

import { InvoiceItemService } from './invoice-item.service';

describe('InvoiceItemsService', () => {
  let service: InvoiceItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
