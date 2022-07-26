import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../../model/todo";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() data !: Todo[]
  @Output() OutIndex = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

  deleteTask(e : number){
    this.OutIndex.emit(e)
  }
}
