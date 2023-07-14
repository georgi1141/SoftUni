import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthActivity } from '../core/guards/auth.activate';

const routes: Routes = [{
  path:'login',
  component: LoginComponent,canActivate:[AuthActivity]

},{
  path:'register',
  component: RegisterComponent,canActivate:[AuthActivity]
},{
  path:'profile',
  component: RegisterComponent,canActivate:[AuthActivity]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
