import { Component, EventEmitter, Output } from '@angular/core';
import { InvoiceItemService } from '../../services/invoice-item.service';
import { InvoiceItem } from '../../interfaces/invoice-item.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-table-invoice-items',
  imports: [
    CommonModule, 
    RouterLink
  ],
  templateUrl: './table-invoice-items.component.html',
  styleUrl: './table-invoice-items.component.css'
})
export class TableInvoiceItemsComponent {
  constructor(
    private invoiceItemService: InvoiceItemService,
    private authService: AuthService
  ) {
  }

  @Output() showErrorMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() showSuccessMessage: EventEmitter<string> = new EventEmitter<string>();

  invoiceItems: InvoiceItem[] = [];

  ngOnInit() {
    this.getInvoiceItems();
  }

  getInvoiceItems() {
    this.invoiceItemService.getInvoiceItems().subscribe((data) => {
      this.invoiceItems = data;
    });
  }

  getInvoiceItemStatus(invoiceItem: InvoiceItem) {
    return this.invoiceItemService.getInvoiceItemStatus(invoiceItem);
  }

  showDeleteButton() {
    return this.authService.isAdmin();
  }

  deleteInvoiceItem(invoiceItem: InvoiceItem) {
    this.invoiceItemService.deleteInvoiceItem(invoiceItem.id).subscribe(() => {
      this.getInvoiceItems();
      this.showSuccessMessage.emit('Article supprimé avec succès');
    }, (error) => {
      this.showErrorMessage.emit('Erreur lors de la suppression de l\'article');
    });
  }
}
