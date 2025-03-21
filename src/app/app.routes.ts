import { Routes } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';
import { RegisterComponent } from './login/components/register/register.component';
import { TableProductsComponent } from './products/components/table-products/table-products.component';
import { EditProductComponent } from './products/components/edit-product/edit-product.component';
import { ViewProductComponent } from './products/components/view-product/view-product.component';

export const routes: Routes = [
    { path : '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'products', component: TableProductsComponent },
    { path: 'products/edit/:id', component: EditProductComponent },
    { path: 'products/edit', component: EditProductComponent },
    { path: 'products/view/:id', component: ViewProductComponent },

];
