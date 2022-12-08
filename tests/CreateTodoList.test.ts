import List from "../src/core/domain/models/task/task.entity";
import TaskList from "../src/core/domain/models/taskList/taskList.entity";

describe('Create todo list', () => {
  test('add a shopping list and choosing a blue shopping cart icon', () => {
    const list = new List()
    list.create({
      name: 'Courses maison',
      iconName: 'Panier courses',
      iconColor: 'blue'
    })
    const taskList = new TaskList([])
    taskList.add(list.dto())

    expect([list.dto()]).toEqual(taskList.get())
  });
});