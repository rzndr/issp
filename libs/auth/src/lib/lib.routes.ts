import { Routes } from '@angular/router';

import { IsspForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { IsspLoginComponent } from './components/login/login.component';
import { IsspRegisterComponent } from './components/register/register.component';
import { IsspTwoStepsComponent } from './components/two-steps/two-steps.component';
import { IsspErrorComponent } from './components/error/error.component';
import { IsspMaintenanceComponent } from './components/maintenance/maintenance.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'forgot-pwd',
        component: IsspForgotPasswordComponent,
      },
      {
        path: 'login',
        component: IsspLoginComponent,
      },
      {
        path: 'register',
        component: IsspRegisterComponent,
      },
      {
        path: 'two-steps',
        component: IsspTwoStepsComponent,
      },
      {
        path: 'error',
        component: IsspErrorComponent,
      },
      {
        path: 'maintenance',
        component: IsspMaintenanceComponent,
      },
    ],
  },
];
