class TodoTask {
  constructor() {
    this.database = [];
  }

  getDatabaseSize() {
    return this.database.length;
  }

  addTask(task = { title }) {
    if (!task) throw new Error("provide a task title");
    let count = this.getDatabaseSize() + 1;
    const newTask = {
      id: count,
      title: task.title,
      isComplete: false,
      createdAt: new Date().toLocaleString(),
    };
    this.database.push(newTask);
  }

  getTaskByNumber(taskNumber) {
    return this.database.find((task) => task.id === Number(taskNumber));
  }

  setTaskComplete(task = { taskNumber, isComplete }) {
    if (task && Object.keys(task).length > 0) {
      const result = this.getTaskByNumber(task.taskNumber);
      if (!result) throw new Error("Task number invalid");
      this.updateCompletedTask(result, task.isComplete);
    }
  }

  updateCompletedTask(result, isComplete) {
    if (!isComplete) return;
    result.isComplete = isComplete;
  }

  showCompletedTask({ interval = 0, limit = this.getDatabaseSize() } = {}) {
    const result = this.database.filter((task) => task.isComplete === true);
    console.log("\nCompleted tasks: ", result.slice(interval, limit));
  }

  showInCompletedTask() {
    const result = this.database.filter((task) => task.isComplete === false);
    console.log("\n InCompleted tasks: ", result);
  }
}

/**
 * Instantiate Task class
 */

const todoTask = new TodoTask();

/**
 * Add a new task
 */

// task 1
todoTask.addTask({ title: "Brush my teeth at 7:00 am" });

// task 2
todoTask.addTask({ title: "Shower at 7:30 am" });

// task 3
todoTask.addTask({ title: "Take my breakfast at 8:00 am" });

// tasl 4
todoTask.addTask({ title: "Going to work at 8:30 am" });

// task 5
todoTask.addTask({ title: "Break for launch time at 12:00 pm" });

//task 6
todoTask.addTask({ title: "Resume working hours at 1:00 pm" });

// task 7
todoTask.addTask({ title: "Closing from work at 4:00 pm" });

// task 8
todoTask.addTask({ title: "Reach home around 5:00 pm" });

// task 9
todoTask.addTask({ title: "Take my evening supper at 6:00 pm" });

// task 10
todoTask.addTask({ title: "Watch global news 7:00 pm" });

// task 11
todoTask.addTask({ title: "Finish watching news at 8:00 pm" });

// tasl 12
todoTask.addTask({ title: "Take my shower at 8:30 pm" });

// task 13
todoTask.addTask({ title: "Check my mails at 9:00 pm" });

// task 14
todoTask.addTask({ title: "Have sex with my wife 10:00 pm" });

// tasl 15
todoTask.addTask({ title: "Sleeping prayer at 10:30 pm" });

// task 16
todoTask.addTask({ title: "Set my alarm to desired time" });

// task 17
todoTask.addTask({ title: "My day has ended..." });

/**
 * Set completed task in the morinig
 */

todoTask.setTaskComplete({ taskNumber: 1, isComplete: true });
todoTask.setTaskComplete({ taskNumber: 2, isComplete: true });
todoTask.setTaskComplete({ taskNumber: 3, isComplete: true });
todoTask.setTaskComplete({ taskNumber: 4, isComplete: true });

/**
 * Show moringing task
 */

console.log("\n\n Morning Task Completed list");
todoTask.showCompletedTask({ interval: 0, limit: 4 });

/**
 * Set completed task in the afternoon
 */
todoTask.setTaskComplete({ taskNumber: 5, isComplete: true });
todoTask.setTaskComplete({ taskNumber: 6, isComplete: true });
todoTask.setTaskComplete({ taskNumber: 7, isComplete: true });
todoTask.setTaskComplete({ taskNumber: 8, isComplete: true });

/**
 * Show afternoon task
 */

console.log("\n\n Afternoon Task Completed list");
todoTask.showCompletedTask({ interval: 4, limit: 8 });

/**
 * Show incompleted task in the evening
 */

console.log("\n\n Evening Task Not Completed list");
todoTask.showInCompletedTask();
