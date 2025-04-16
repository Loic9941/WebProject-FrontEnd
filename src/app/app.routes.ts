import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { TableProductsComponent } from './products/components/table-products/table-products.component';
import { EditProductComponent } from './products/components/edit-product/edit-product.component';
import { ViewProductComponent } from './products/components/view-product/view-product.component';
import { authGuard } from './shared/guards/auth.guard';
import { TableUsersComponent } from './users/components/table-users/table-users.component';
import { EditInvoiceComponent } from './invoices/components/edit-invoice/edit-invoice.component';
import { TableInvoicesComponent } from './invoices/components/table-invoices/table-invoices.component';
import { ViewInvoiceComponent } from './invoices/components/view-invoice/view-invoice.component';
import { RateProductComponent } from './products/components/rate-product/rate-product.component';
import { TableInvoiceItemsComponent } from './invoice-items/components/table-invoice-items/table-invoice-items.component';
import { EditInvoiceItemComponent } from './invoice-items/components/edit-invoice-item/edit-invoice-item.component';
import { ShopProductsComponent } from './products/components/shop-products/shop-products.component';

export const routes: Routes = [
    { path : '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'products', component: TableProductsComponent, canActivate: [authGuard] },
    { path: 'products/edit/:id', component: EditProductComponent,  canActivate: [authGuard] },//to do later, add  guards
    { path: 'products/edit', component: EditProductComponent,  canActivate: [authGuard] },
    { path: 'products/rate/:id', component: RateProductComponent, canActivate: [authGuard] },
    { path: 'products/view/:id', component: ViewProductComponent,  canActivate: [authGuard] },
    
    { path: 'shop', component: ShopProductsComponent, canActivate: [authGuard] },

    { path: 'users', component: TableUsersComponent, canActivate: [authGuard] },

    { path: 'invoices/edit/:id', component: EditInvoiceComponent, canActivate: [authGuard] },
    { path: 'invoices', component : TableInvoicesComponent, canActivate: [authGuard] },
    { path: 'invoices/view/:id', component: ViewInvoiceComponent, canActivate: [authGuard] },

    { path: 'invoice-items', component: TableInvoiceItemsComponent, canActivate: [authGuard] },
    { path: 'invoice-items/edit/:id', component: EditInvoiceItemComponent, canActivate: [authGuard] },
];
