export class Todo {

  public id : number = 0
  public task : string = ""
  public state : boolean = false
  static count = 1

  constructor(task: string) {

    this.task = task;
    this.id = Todo.count
    Todo.count++

    this.id++
  }

}
