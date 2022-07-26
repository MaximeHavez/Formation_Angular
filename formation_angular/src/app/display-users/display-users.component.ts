import { Component, OnInit } from '@angular/core';
import data from "../data/usersData";

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  public user : any = data;
  public check : boolean = false;
  constructor() {

  }

  ngOnInit(): void {
    this.fusion()
  }

  delete(index : number) {
    data.splice(index, 1)
  }

  change(index : number) : void {
    this.user[index].isVisible = !this.user[index].isVisible;
  }

  fusion() {
    let AttFalse = {isVisible : false};
    for (let item of data) {
      item = Object.assign(item, AttFalse);
    }
  }

}
