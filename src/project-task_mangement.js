
const projectList = document.getElementById('project_list');
const projectNameInput=document.getElementById('project_name_input')
const taskList=document.getElementById('task_list')
let taskName=document.getElementById('Task_name')
let taskDescription=document.getElementById('Task_description')
let PriorityType=document.getElementById('Priority_type')
let date=document.getElementById('date')
let projectArray=[]
let taskID=0;
let projectID=0;


class Project {
    constructor(name,id) {
      this.name = name;
      this.id=id;
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
  
    removeTask(task) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    }
  
    getTasks() {
      return this.tasks;
    }

  }


  class Task {
    constructor(name, description, date, priority) {
      this.name = name;
      this.description = description;
      this.date = date;
      this.priority = priority;
    }
  }

let today=new Project('today',0)
 projectArray.push(today)





function  createProjectInStroge(){
    let newProject= new Project(projectNameInput.value,projectArray.length)
     projectArray.push(newProject);
     projectNameInput.value='';
}





function  createProjectHTML(index){
 
  let project=document.createElement('button');
  let fileIcon=document.createElement('span');

  project.classList.add('nav_btn','project');
  project.setAttribute('id',`${index}`)
  fileIcon.classList.add('material-symbols-outlined');

  fileIcon.innerText='article';
  projectList.appendChild(project)
  project.appendChild(fileIcon);
  project.innerHTML+=projectArray[index].name;
}






function createTaskInStroge(){

      projectArray[projectID].tasks[taskID]= new Task( taskName.value, taskDescription.value, date.value, PriorityType.value)
      taskID++;
    }



function createTaskHTML(index){
     let task=document.createElement('div')
     let taskOverview=document.createElement('div')
     let left=document.createElement('div')
     let checkBox=document.createElement('input')
     let right=document.createElement('div')
     let editTask=document.createElement('div')
     let DeleteTask=document.createElement('div')
     
     task.setAttribute('class','task')
     taskOverview.setAttribute('class','task_overview')
     right.setAttribute('class','right')
     left.setAttribute('class','left')
     editTask.setAttribute('class','edit_task','task_btn')
     DeleteTask.setAttribute('class','delete_task','task_btn')
     checkBox.setAttribute('type','checkBox')

     editTask.insertAdjacentHTML('beforeend',`<span class="material-symbols-outlined">edit</span>`)
     DeleteTask.insertAdjacentHTML('beforeend',`<span class="material-symbols-outlined">delete</span>`)


     taskList.appendChild(task)
     task.appendChild(taskOverview)
     taskOverview.appendChild(left)
     taskOverview.appendChild(right)
     left.appendChild(checkBox)
     right.appendChild(editTask)
     right.appendChild(DeleteTask)


     checkBox.insertAdjacentHTML('afterend',`<h6>${projectArray[0].tasks[0].name}<h6>`)

}

export{
  createProjectHTML,
  createTaskHTML,
  createProjectInStroge,
  createTaskInStroge,
  projectArray
}
