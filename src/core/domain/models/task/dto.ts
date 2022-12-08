export default class TaskDto {

  name: string
  iconName: string
  iconColor: string

  constructor({name, iconName, iconColor}: TaskDto){
    this.name = name;
    this.iconName = iconName;
    this.iconColor = iconColor;
  }
}
