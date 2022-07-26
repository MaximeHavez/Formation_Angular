import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../model/UserModel";
import {UsersService} from "../../service/users.service";

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {


  constructor(private service : UsersService) { }

  ngOnInit(): void {
  }

  addUser = (e:UserModel) => {
    this.service.postUser(e)
  }

}
