import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full' },
    {path: 'home', component: MainComponent},
    // {path: 'user/:id', 
    //     loadComponent: () => import('./user-page/user-page.component').then(m => m.UserPageComponent), 
    //     canActivate: [authGuard]},
    {path: '**', component: NotFoundComponent}
];
