import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../../model/UserModel";

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  @Input()
  data : UserModel[] = []

  @Output()
  user = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  outId(e:number) {
    this.user.emit(e)
  }

}
