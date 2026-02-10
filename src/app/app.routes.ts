import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Products } from './page/products/products';
import { Warehouse } from './page/warehouse/warehouse';
import { Contact } from './page/contact/contact';

export const routes: Routes = [
    {
    path: 'Home',
    component: Home
    },
    {
        path: 'Products',
        component: Products
    },
    {
        path: 'Warehouse',
        component: Warehouse
    },
    {
        path: 'Contact',
        component: Contact
    }
];
