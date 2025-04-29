import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { InvoiceService } from '../../../invoices/services/invoice.service';
import { Invoice } from '../../../invoices/interfaces/invoice.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-navbar-private',
  imports: [CommonModule],
  templateUrl: './navbar-private.component.html',
  styleUrl: './navbar-private.component.css'
})
export class NavbarPrivateComponent {
  @Output() showErrorMessage: EventEmitter<string> = new EventEmitter<string>();


  constructor(
    private router : Router,
    private authService: AuthService,
    private invoiceService: InvoiceService,
  ) {
  }

  ngOnInit() {
  }

  logout() : void {
    sessionStorage.removeItem("jwt");
    this.router.navigate(["/login"]);
  }

  showCart() : boolean {
    return this.authService.isCustomer();
  }

  isAdmin() : boolean {
    return this.authService.isAdmin();
  }

  isDeliveryPartner() : boolean {
    return this.authService.isDeliveryPartner();
  }

  isArtisan() : boolean {
    return this.authService.isArtisan();
  }

  navigateToCustomerProducts() : void {
    this.router.navigate(["customer/products"]);
  }

  navigateToCustomerInvoices() : void {
    this.router.navigate(["customer/invoices"]);
  }

  navigateToAdminUsers() : void {
    this.router.navigate(["admin/users"]);
  }

  navigateToAdminInvoiceItems() : void {
    this.router.navigate(["admin/invoice-items"]);
  }

  navigateToAdminProducts() : void {
    this.router.navigate(["admin/products"]);
  }

  navigateToAdminRates() : void {
    this.router.navigate(["admin/rates"]);
  }

  navigateToArtisanProducts() : void {
    this.router.navigate(["artisan/products"]);
  }

  navigateToArtisanRates() : void {
    this.router.navigate(["artisan/rates"]);
  }

  navigateToArtisanInvoiceItems() : void {
    this.router.navigate(["artisan/invoice-items"]);
  }

  navigateTodeliveryPartnerInvoiceItems() : void {
    this.router.navigate(["delivery-partner/invoice-items"]);
  }

  isCustomer() : boolean {
    return this.authService.isCustomer();
  }

  navigateToCart() : void {
    this.invoiceService.getPendingInvoice().subscribe((data: any) => {
      const invoice : Invoice = data;
      if (invoice) {
        const invoiceId = invoice.id;
        this.router.navigate(["customer/invoices", invoiceId,"edit"]);
      }
      else {
        this.showErrorMessage.emit("Aucune commande en cours");
      }
    });
  }
}
