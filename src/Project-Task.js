const createTask = (name, date, priority) => {
  return { name, date, priority };
};

const createProject = (name, projectID) => {
  let taskList = [];

  const addTask = (newTask) => {
    let existingTask = taskList.find((task) => task.name === newTask.name);

    if (!existingTask) {
      taskList.push(newTask);
    } else {
      console.log('Task with the same name already exists in the project.');
    }
  };

  const deleteTask = (taskName) => {
    taskList = taskList.filter((task) => task.name !== taskName);
  };

  const getTask = (taskName) => {
    return taskList.find((task) => task.name === taskName);
  };

  return { name, projectID, taskList, addTask, deleteTask, getTask };
};

const ToDoList = () => {
  let projectList = [];

  const addProject = (newProject) => {
    let existingProject = projectList.find((Project) => Project.name === newProject.name);

    if (!existingProject) {
      projectList.push(newProject);
    } else {
      console.log('Task with the same name already exists in the todolist.');
    }
  };

  const deleteProject = (projectName) => {
    projectList = projectList.filter((project) => project.name !== projectName);
  };

  const getProject = (projectName) => {
    return projectList.find((task) => task.name === projectName);
  };

  return { projectList, addProject, deleteProject, getProject };
};

let today = createProject('Today', 0);
const todoList = ToDoList();
todoList.addProject(today);

export {
  todoList,
  createProject,
  createTask
};
