class ToDoList {
  constructor() {
    this.database = [];
    this.session = {};
    this.isTaskAdded = false;
  }
  activityCategory(addNewTask = { taskTitle, colour, newTask }) {
    this.database.push(addNewTask);
    console.log("TODO list", this.database);
    const result = this.database.find(
      (info) => info.newTask === addNewTask.newTask
    );
    if (!result) {
      throw new Error("Add New Task):");
    }
    if (result.newTask === addNewTask.newTask) {
      this.session = result;
      this.isTaskAdded = true;
      console.log("Task Successfully Added");
    }
  }

  updateActivityCategory(addExtraNewTask = { task2, task3 }) {
    if (!this.isTaskAdded) {
      throw new Error("Add New Task):");
    }
    if (addExtraNewTask && Object.keys(addExtraNewTask).length > 0) {
      const userId = this.database.indexOf(this.session);
      const result = this.updateNewTask(addExtraNewTask);
      this.database[userId] = result;
      console.log("New Task Added", this.database[userId]);
    }
  }
  updateNewTask(addExtraNewTask) {
    const { taskTitle, colour, newTask } = this.session;

    const updateTask = {
      taskTitle,
      colour,
      newTask,
    };
    for (let [key, values] of Object.entries(addExtraNewTask)) {
      updateTask[key] = values;
    }

    return updateTask;
  }
}

const reqNewList = {
  taskTitle: "example",
  colour: "green",
  newTask: "Go to the market at 10am",
};

const toDoList = new ToDoList();
toDoList.activityCategory(reqNewList);

const reqExtraTask = {
  task1: "Go to the Hospital",
  task2: "Go to the Gym",
};

toDoList.updateActivityCategory(reqExtraTask);
