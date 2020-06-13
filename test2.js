class ToDoTask {
  constructor() {
    this.database = [];
  }
  getDatabaseSize() {
    return this.database.length;
  }

  addTask(task = { title }) {
    if (!task) {
      console.log("add title");
    }
    let count = this.getDatabaseSize() + 1;
    const newTask = {
      id: count,
      title: task.title,
      isCompleted: false,
      createdAt: new Date().toLocaleString(),
    };
    this.database.push(newTask);
    console.log(this.database)
  }
}

const reqNewTask = {
  title: "Activities for this morning",
};

const toDoTask = new ToDoTask();
toDoTask.addTask(reqNewTask);
