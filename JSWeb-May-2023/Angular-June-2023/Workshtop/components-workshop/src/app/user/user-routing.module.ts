import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthActivity } from '../core/guards/auth.activate';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path:'login',
  component: LoginComponent

},{
  path:'register',
  component: RegisterComponent
},{
  path:'profile',
  component: ProfileComponent,canActivate:[AuthActivity]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { } 
