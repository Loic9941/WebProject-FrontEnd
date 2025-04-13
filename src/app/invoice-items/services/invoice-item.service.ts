import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceItemService {

  constructor(private apiService: ApiService) { }

  getInvoiceItems(): Observable<any>  {
    return this.apiService.get('invoiceItem');
  }

  getInvoiceItemById(id: number): Observable<any>  {
    return this.apiService.get(`invoiceItem/${id}`);
  }

  // inPreparation, readyToBePickedUp ,pickedUp, inTransit, delivered
  getInvoiceItemStatus(invoiceItem: any) {
    if (invoiceItem.status === 'inPreparation') {
      return 'En préparation';
    } else if (invoiceItem.status === 'readyToBePickedUp') {
      return 'En attente du transporteur';
    } else if (invoiceItem.status === 'pickedUp') {
      return 'Pris en charge par le transporteur';
    } else if (invoiceItem.status === 'inTransit') {
      return 'En transit';
    } else if (invoiceItem.status === 'delivered') {
      return 'Livré';
    }
    return 'Statut inconnu';
  }
}
