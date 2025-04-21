import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { authGuard } from './shared/guards/auth.guard';
import { TableUsersComponent } from './users/components/table-users/table-users.component';
import { EditInvoiceComponent } from './invoices/components/edit-invoice/edit-invoice.component';
import { RateProductComponent } from './products/components/rate-product/rate-product.component';
import { TableInvoiceItemsComponent } from './invoice-items/components/table-invoice-items/table-invoice-items.component';
import { EditInvoiceItemComponent } from './invoice-items/components/edit-invoice-item/edit-invoice-item.component';
import { FinancialReportComponent } from './accounting/components/financial-report/financial-report.component';
import { TableRatingComponent } from './products/components/table-rating/table-rating.component';
import { EditCommentComponent } from './products/components/edit-comment/edit-comment.component';
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

export const routes: Routes = [
    { path : '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'CustomerEditInvoiceComponentregister', component: RegisterComponent },

    //Artisan Routes
    { path: 'artisan/products', component: ArtisanTableProductsComponent, canActivate: [authGuard, artisanGuard]},
    { path: 'artisan/products/:id/edit', component: ArtisanEditProductComponent ,  canActivate: [authGuard, artisanGuard] },
    { path: 'artisan/products/new', component: ArtisanNewProductComponent,  canActivate: [authGuard,artisanGuard] },
    
    //Customer Routes
    { path: 'customer/products', component: CustomerTableProductsComponent, canActivate: [authGuard, customerGuard] },
    { path: 'customer/products/:id', component: CustomerViewProductComponent,  canActivate: [authGuard, customerGuard] },
    { path: 'customer/invoices', component : CustomerTableInvoicesComponent, canActivate: [authGuard, customerGuard] },
    { path: 'customer/invoices/:id', component: CustomerViewInvoiceComponent, canActivate: [authGuard, customerGuard] },
    { path: 'customer/invoices/:id/edit', component: CustomerEditInvoiceComponent, canActivate: [authGuard, customerGuard] },

    
    //To do
    { path: 'products/:id/rate', component: RateProductComponent, canActivate: [authGuard] },

    
    { path: 'rates', component: TableRatingComponent, canActivate: [authGuard, artisanGuard] },
    { path: 'rates/:id/comment', component: EditCommentComponent, canActivate: [authGuard, artisanGuard] },



    { path: 'financial-report', component: FinancialReportComponent, canActivate: [authGuard, artisanGuard] },

    { path: 'users', component: TableUsersComponent, canActivate: [authGuard, administratorGuard] },

    { path: 'invoices/:id/edit', component: EditInvoiceComponent, canActivate: [authGuard, ] },

    { path: 'invoice-items', component: TableInvoiceItemsComponent, canActivate: [authGuard] },
    { path: 'invoice-items/:id/edit', component: EditInvoiceItemComponent, canActivate: [authGuard] },
];
