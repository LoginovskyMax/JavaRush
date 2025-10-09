import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full' },
    {path: 'home', component: MainComponent},
    {path: 'product/:id', 
        loadComponent: () => import('./pages/product/product.component').then(m => m.ProductComponent), 
     },
    {path: '**', component: NotFoundComponent}
];
