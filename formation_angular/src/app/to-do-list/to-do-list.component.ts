import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  public todo : string[] = [];
  public done : string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addNewToDo(input : string){
    if (input.length >0) {
      this.todo.push(input);
    }
  }

  switchToDone(index : number) {
    let TodoSwitched = this.todo.splice(index, 1)
    this.done.push(TodoSwitched[0])
  }

  switchToToDo(index : number) {
    let TodoSwitched = this.done.splice(index, 1)
    this.todo.push(TodoSwitched[0])
  }

  delete(index : number){
    this.todo.splice(index, 1)
  }

  deleteDone(index : number){
    this.done.splice(index, 1)
  }

}
