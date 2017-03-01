import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UbigeoComponent } from './components/ubigeo/ubigeo.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'ubigeo',
        component: UbigeoComponent
    }
];

// tslint:disable-next-line:eofline
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);