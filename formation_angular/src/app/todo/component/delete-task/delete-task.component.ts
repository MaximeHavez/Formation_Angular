import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../../model/todo";

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {

  @Input()
  index !: number

  @Output()
  Outindex = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  EmitterIndex(){
    this.Outindex.emit(this.index)
  }
}
