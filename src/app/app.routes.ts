import { Routes } from '@angular/router';
import { appPagesRoutes } from './AppPages/appPages.route';
import { userRolesRoutes } from './UsersRoles/userRoles-routes';
import { authRoutes } from './Auth/auth.route';

export const routes: Routes = [
  ...appPagesRoutes,
  ...userRolesRoutes,
  ...authRoutes
];
