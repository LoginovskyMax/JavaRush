import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full' },
    {path: 'home', component: MainComponent},
    {path: 'product/:id', 
        loadComponent: () => import('./pages/product/product.component').then(m => m.ProductComponent), 
     },
    {path: 'basket', 
        loadComponent: () => import('./pages/basket/basket.component').then(m => m.BasketComponent), 
        canActivate: [authGuard]
     },
    {path: 'registrate', 
        loadComponent: () => import('./pages/registrate/registrate.component').then(m => m.RegistrateComponent), 
     },
    {path: '**', component: NotFoundComponent}
];
