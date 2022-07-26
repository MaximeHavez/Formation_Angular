import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "../../../model/todo";

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  @Output()
  newTask : EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  addTask = (item : HTMLInputElement) => {
    this.newTask.emit(new Todo(item.value))
    item.value = '';
  }
}
