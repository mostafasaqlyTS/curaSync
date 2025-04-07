import { Routes } from '@angular/router';
import { appPagesRoutes } from './AppPages/appPages.route';
import { userRolesRoutes } from './UsersRoles/userRoles-routes';

export const routes: Routes = [
  ...appPagesRoutes,
  ...userRolesRoutes
];
