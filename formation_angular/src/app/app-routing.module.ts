import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateUsersComponent} from "./users/page/create-users/create-users.component";
import {UsersPageComponent} from "./users/page/users-page/users-page.component";
import {Page404Component} from "./page404/page404.component";
import {DetailsComponent} from "./users/page/details/details.component";

const routes: Routes = [
  {path:'', redirectTo : '/users/display', pathMatch: 'full'},
  {path: 'users', children : [
      {path: 'display', component: UsersPageComponent},
      {path: 'create', component: CreateUsersComponent},
      {path :'details/:id', component: DetailsComponent }
    ]},
  {path:'**', component : Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
