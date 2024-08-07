import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, title: 'L O G I N'},
  { path: 'register', component: SignupComponent, title: 'R E G I S T E R'},
  { path: '**', component: LoginComponent, title: "L O G I N"}
];
