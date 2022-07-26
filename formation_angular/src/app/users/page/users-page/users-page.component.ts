import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../service/users.service";
import {UserModel} from "../../model/UserModel";
import data from "../../../data/usersData";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  users : UserModel[] = [new UserModel()]

  constructor(private service : UsersService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers = () => {
    this.service.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(this.users)
    })
  }

  deleteUser() {
    this.service.deleteUser(e:number)
  }

}
