import { Component } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { InvoiceItem } from '../../../invoice-items/interfaces/invoice-item.interface';

@Component({
  selector: 'app-financial-report',
  imports: [],
  templateUrl: './financial-report.component.html',
  styleUrl: './financial-report.component.css'
})
export class FinancialReportComponent {

  constructor(
    private apiService: ApiService) { }

  invoiceItems : InvoiceItem[] = [];

  ngOnInit(): void {

  }

  // Add any methods or properties needed for the component here
}
