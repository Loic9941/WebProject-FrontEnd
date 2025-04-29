import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { authGuard } from './shared/guards/auth.guard';
import { EditInvoiceItemComponent } from './invoice-items/components/edit-invoice-item/edit-invoice-item.component';
import { artisanGuard } from './shared/guards/artisan.guard';
import { administratorGuard } from './shared/guards/administrator.guard';
import { customerGuard } from './shared/guards/customer.guard';
import { ArtisanEditProductComponent } from './products/pages/artisan-edit-product/artisan-edit-product.component';
import { ArtisanNewProductComponent } from './products/pages/artisan-new-product/artisan-new-product.component';
import { ArtisanTableProductsComponent } from './products/pages/artisan-table-products/artisan-table-products.component';
import { CustomerViewProductComponent } from './products/pages/customer-view-product/customer-view-product.component';
import { CustomerTableProductsComponent } from './products/pages/customer-table-products/customer-table-products.component';
import { CustomerTableInvoicesComponent } from './invoices/pages/customer-table-invoices/customer-table-invoices.component';
import { CustomerViewInvoiceComponent } from './invoices/pages/customer-view-invoice/customer-view-invoice.component';
import { CustomerEditInvoiceComponent } from './invoices/pages/customer-edit-invoice/customer-edit-invoice.component';
import { CustomerRateProductComponent } from './products/pages/customer-rate-product/customer-rate-product.component';
import { ArtisanTableRatingsComponent } from './products/pages/artisan-table-ratings/artisan-table-ratings.component';
import { AdminTableUsersComponent } from './users/pages/admin-table-users/admin-table-users.component';
import { ArtisanRateCommentComponent } from './products/pages/artisan-rate-comment/artisan-rate-comment.component';
import { deliveryPartnerGuard } from './shared/guards/delivery-partner.guard';
import { ArtisanTableInvoiceItemsComponent } from './products/pages/artisan-table-invoice-items/artisan-table-invoice-items.component';
import { DeliveryPartnerTableInvoiceItemsComponent } from './products/pages/delivery-partner-table-invoice-items/delivery-partner-table-invoice-items.component';
import { AdminTableInvoiceItemsComponent } from './products/pages/admin-table-invoice-items/admin-table-invoice-items.component';
import { ArtisanEditInvoiceItemComponent } from './products/pages/artisan-edit-invoice-item/artisan-edit-invoice-item.component';
import { DeliveryPartnerEditInvoiceItemComponent } from './products/pages/delivery-partner-edit-invoice-item/delivery-partner-edit-invoice-item.component';
import { RateProductComponent } from './products/components/rate-product/rate-product.component';

export const routes: Routes = [

    //Public routes
    { path : '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    //Artisan Routes
    { path: 'artisan/products', component: ArtisanTableProductsComponent, canActivate: [authGuard, artisanGuard]},
    { path: 'artisan/products/:id/edit', component: ArtisanEditProductComponent ,  canActivate: [authGuard, artisanGuard] },
    { path: 'artisan/products/new', component: ArtisanNewProductComponent,  canActivate: [authGuard,artisanGuard] },
    { path: 'artisan/rates', component: ArtisanTableRatingsComponent, canActivate: [authGuard, artisanGuard] },
    { path: 'artisan/rates/:id/comment/new', component: ArtisanRateCommentComponent, canActivate: [authGuard, artisanGuard] },
    { path: 'artisan/rates/:id/comment/:commentId/edit', component: ArtisanRateCommentComponent, canActivate: [authGuard, artisanGuard] },
    { path: 'artisan/invoice-items', component: ArtisanTableInvoiceItemsComponent, canActivate: [authGuard, artisanGuard] },
    { path: 'artisan/invoice-items/:id/edit', component: ArtisanEditInvoiceItemComponent, canActivate: [authGuard, artisanGuard] },

    //Customer Routes
    { path: 'customer/products', component: CustomerTableProductsComponent, canActivate: [authGuard, customerGuard] },
    { path: 'customer/products/:id', component: CustomerViewProductComponent,  canActivate: [authGuard, customerGuard] },
    { path: 'customer/invoices', component : CustomerTableInvoicesComponent, canActivate: [authGuard, customerGuard] },
    { path: 'customer/invoices/:id', component: CustomerViewInvoiceComponent, canActivate: [authGuard, customerGuard] },
    { path: 'customer/invoices/:id/edit', component: CustomerEditInvoiceComponent, canActivate: [authGuard, customerGuard] },
    { path: 'customer/invoice-items/:id/rates/new', component: CustomerRateProductComponent, canActivate: [authGuard, customerGuard] },

    //deliveryPartner Routes
    { path: 'delivery-partner/invoice-items', component: DeliveryPartnerTableInvoiceItemsComponent, canActivate: [authGuard, deliveryPartnerGuard] },
    { path: 'delivery-partner/invoice-items/:id/edit', component: DeliveryPartnerEditInvoiceItemComponent, canActivate: [authGuard, deliveryPartnerGuard] },
    
    //administrator Routes
    { path: 'admin/users', component: AdminTableUsersComponent, canActivate: [authGuard, administratorGuard] },
    { path: 'admin/invoice-items', component: AdminTableInvoiceItemsComponent, canActivate: [authGuard, administratorGuard] },

];
