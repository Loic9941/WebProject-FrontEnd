import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { InvoiceService } from '../../../invoices/services/invoice.service';
import { Invoice } from '../../../invoices/interfaces/invoice.interface';

@Component({
  selector: 'app-navbar-private',
  imports: [CommonModule],
  templateUrl: './navbar-private.component.html',
  styleUrl: './navbar-private.component.css'
})
export class NavbarPrivateComponent {
  @Input() numberCart: number = 0;

  constructor(
    private router : Router,
    private authService: AuthService,
    private invoiceService: InvoiceService
  ) {
  }

  ngOnInit() {
    //if the user is a customer
    if (this.authService.isCustomer()) {
      this.invoiceService.getPendingInvoice().subscribe((data: any) => {
        const invoice : Invoice = data;
        if (invoice) {
          let sum = 0;
          for (let i = 0; i < invoice.invoiceItems.length; i++) {
            sum += invoice.invoiceItems[i].quantity;
          }
          this.numberCart = sum;
        }
      });
    }
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

  navigateToArtisanProducts() : void {
    this.router.navigate(["artisan/products"]);
  }

  navigateToArtisanRates() : void {
    this.router.navigate(["artisan/rates"]);
  }

  navigateToArtisanInvoiceItems() : void {
    this.router.navigate(["artisan/invoice-items"]);
  }

  navigateToArtisanFinancialReports() : void {
    this.router.navigate(["artisan/financial-reports"]);
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
    });
  }
}
