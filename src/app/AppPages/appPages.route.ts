
import { Routes } from "@angular/router";

export const appPagesRoutes: Routes = [
    {
        path: 'about-us',
        loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent),
        title:'about us'
    },
    {
        path: 'contact',
        loadComponent:()=>import('./contact/contact.component').then(m=>m.ContactComponent),
        title:'contact'
    },
    {
        path: 'services',
        loadComponent:()=>import('./services-page/services-page.component').then(m=>m.ServicesPageComponent),
        title: 'services'
    }
];
