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
      return 'Prise en charge par le transporteur';
    } else if (invoiceItem.status === 'inTransit') {
      return 'En transit';
    } else if (invoiceItem.status === 'delivered') {
      return 'Livré';
    }
    return 'Statut inconnu';
  }

  markAsReadyToBeShipped(invoiceItemId: number) {
    return this.apiService.put(`invoiceItem/${invoiceItemId}/markAsReadyToBeShipped`, {});
  }

  markAsPickedUp(invoiceItemId: number, estimatedDeliveryDate?: string) {
    let data = {
      estimatedDeliveryDate: estimatedDeliveryDate ? new Date(estimatedDeliveryDate).toISOString().split('T')[0] : undefined
    };
    return this.apiService.put(`invoiceItem/${invoiceItemId}/markAsPickedUp`, data);
  }

  markAsInTransit(invoiceItemId: number, estimatedDeliveryDate?: string) {
    let data = {
      estimatedDeliveryDate: estimatedDeliveryDate ? new Date(estimatedDeliveryDate).toISOString().split('T')[0] : undefined
    };
    return this.apiService.put(`invoiceItem/${invoiceItemId}/markAsInTransit`, data);
  }

  markAsDelivered(invoiceItemId: number) {
    return this.apiService.put(`invoiceItem/${invoiceItemId}/markAsDelivered`, {});
  }
}
