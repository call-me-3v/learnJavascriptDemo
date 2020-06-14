function newTask(_task = { id, title }) {
  return `        (${_task.id}) \n tiltle: ${_task.title} \n task: ${userTask("Go tot the Gym")}`;
}

function userTask(task) {
  return task;
}

const reqTask = {
  id: 1,
  title: "Morning Activities",
};

console.log(newTask(reqTask));
