import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private apiService: ApiService) { }

  getInvoices() {
    return this.apiService.get('invoice/getPendingInvoice');
  }
}
