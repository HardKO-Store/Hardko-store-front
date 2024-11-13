import { Routes } from '@angular/router';
import {HomeDashboardComponent} from './store/pages/home-dashboard/home-dashboard.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeDashboardComponent
  },
  {
    path: '',
    redirectTo: () => '/home',
    pathMatch: 'full'
  }
];
