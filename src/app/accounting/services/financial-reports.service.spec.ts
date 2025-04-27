import { TestBed } from '@angular/core/testing';

import { FinancialReportsService } from './financial-reports.service';

describe('FinancialReportService', () => {
  let service: FinancialReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
