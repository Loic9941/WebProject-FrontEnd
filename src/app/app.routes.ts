import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { TableProductsComponent } from './products/components/table-products/table-products.component';
import { EditProductComponent } from './products/components/edit-product/edit-product.component';
import { ViewProductComponent } from './products/components/view-product/view-product.component';
import { authGuard } from './shared/guards/auth.guard';
import { TableUsersComponent } from './users/components/table-users/table-users.component';
import { EditInvoiceComponent } from './invoices/components/edit-invoice/edit-invoice.component';

export const routes: Routes = [
    { path : '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'products', component: TableProductsComponent, canActivate: [authGuard] },
    { path: 'products/edit/:id', component: EditProductComponent,  canActivate: [authGuard] },//to do later, add  guards
    { path: 'products/edit', component: EditProductComponent,  canActivate: [authGuard] },
    { path: 'products/view/:id', component: ViewProductComponent,  canActivate: [authGuard] },
    { path: 'users', component: TableUsersComponent, canActivate: [authGuard] },
    { path: 'invoices/edit/:id', component: EditInvoiceComponent, canActivate: [authGuard] },
];
