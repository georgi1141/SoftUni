import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesListComponent } from '../themes-list/themes-list.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { AuthActivity } from '../core/guards/auth.activate';

const routes: Routes = [{
  path:'themes',
  children: [
    {path: '', 
    pathMatch: 'full',
component:ThemesListComponent},{
    path: ':themeId',
    component: CurrentThemeComponent

}
  ]

},{
  path:'new-theme',
  component: NewThemeComponent,canActivate:[AuthActivity]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
