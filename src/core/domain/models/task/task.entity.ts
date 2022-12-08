import TaskDto from "./dto"

export default class Task {

  private name?: string
  private iconName?: string
  private iconColor?: string
  

  create(object: TaskDto) {
    this.name = object.name
    this.iconName = object.iconName
    this.iconColor = object.iconColor
  }

  dto(): TaskDto {
    return new TaskDto({
      name: this.name,
      iconName: this.iconName,
      iconColor: this.iconColor,
  })
  }
  
}