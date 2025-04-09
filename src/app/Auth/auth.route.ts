import { Routes } from "@angular/router";

export const authRoutes: Routes = [
// loadComponent
{
  path: 'login',
  loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
  title:'login',
},
{
  path: 'register',
  loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
  title:'register',
},
{
  path: 'signUp/patient',
  loadComponent: () => import('./register/sign-up-form/sign-up-form.component').then(m => m.SignUpFormComponent),
  title:'patient-signUp',
},

{
  path: 'signUp/healthProvider',
  loadComponent: () => import('./register/health-provider/health-provider.component').then(m => m.HealthProviderComponent),
  title:'healthProvider',
},

{ path: 'signUp/doctor',  loadComponent: () => import('./register/sign-up-form/sign-up-form.component').then(m => m.SignUpFormComponent), title: 'doctor-SignUp' },
{ path: 'signUp/lab', loadComponent: () => import('./register/sign-up-form/sign-up-form.component').then(m => m.SignUpFormComponent), title: 'lab-SignUp' },
{
  path: 'signUp/radiology',
  loadComponent: () => import('./register/sign-up-form/sign-up-form.component').then(m => m.SignUpFormComponent),
  title: 'radiology-SignUp',
},
{
  path: 'signUp/pathology',
  loadComponent: () => import('./register/sign-up-form/sign-up-form.component').then(m => m.SignUpFormComponent),
  title: 'pathology-SignUp',
},


];
