import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './404/404.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        loadChildren: './login/login.component'
      }
    ]
  },
  {
    path: '404',
    component: NotfoundComponent,
    children: [
      {
        path: '404',
        loadChildren: './404/404.component'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
