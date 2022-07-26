import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserModel} from "../../model/UserModel";
import {UsersService} from "../../service/users.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user : UserModel = new UserModel('', '', '', '')

  constructor(private route : ActivatedRoute, private service : UsersService) { }

  ngOnInit(): void {
    let idUser = this.route.snapshot.params['id'];
    //this.user = Object.assign(this.user, this.selectUser(idUser))
  }

  // selectUser(id : number) : UserModel {
  //   let idUser = this.route.snapshot.params['id'];
  //   return this.service.usersTable[idUser-1]
  // }

}
