import TaskDto from "../task/dto"

export default class TaskList {
  
  constructor(private list: TaskDto[]) {
    this.list = []
  }
  add(object: TaskDto): void {
    this.list?.push(object)
  }

  get(): TaskDto[] | undefined {
    return this.list
  }
  
}