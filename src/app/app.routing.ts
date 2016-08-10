import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);