import {Component, EventEmitter, OnInit} from '@angular/core';
import {Todo} from "../../../model/todo";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {




  public todoList : Todo[] = [
    new Todo("Sortir"),
    new Todo("Manger"),
    new Todo("Dormir")
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addTask = (e: Todo) => {
    console.log(e)
    this.todoList.push(e)
  }

  deleteTask = (e : number) => {
    this.todoList.splice(e, 1)
  }

}
