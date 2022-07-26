import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DisplayUsersComponent } from './display-users/display-users.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TodoPageComponent } from './todo/page/todo-page/todo-page.component';
import { DisplayComponent } from './todo/component/display/display.component';
import { AddtaskComponent } from './todo/component/addtask/addtask.component';
import { DeleteTaskComponent } from './todo/component/delete-task/delete-task.component';
import { UsersPageComponent } from './users/page/users-page/users-page.component';
import { ShowUsersComponent } from './users/component/show-users/show-users.component';
import { CreateUsersComponent } from './users/page/create-users/create-users.component';
import { FormulaireComponent } from './users/layout/formulaire/formulaire.component';
import { Page404Component } from './page404/page404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './users/page/details/details.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DisplayUsersComponent,
    ToDoListComponent,
    TodoPageComponent,
    DisplayComponent,
    AddtaskComponent,
    DeleteTaskComponent,
    UsersPageComponent,
    ShowUsersComponent,
    CreateUsersComponent,
    FormulaireComponent,
    Page404Component,
    NavbarComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
