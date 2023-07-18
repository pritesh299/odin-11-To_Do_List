
import{ todoList } from './Project-Task.js';
const HTMLtaskList = document.getElementById('task_list');
const HTMLprojectList=document.getElementById('project_list')
const addProjectBtn = document.getElementById('add_project_btn');
let currentProjectName='Today';



const renderTasks = (projectName) => {
    let projectToRender= todoList.getProject(projectName)
    HTMLtaskList.innerHTML = '';
    projectToRender.taskList.forEach(task => {
        let taskOverview=document.createElement('div')
        HTMLtaskList.appendChild(taskOverview)
        taskOverview.setAttribute('class','task_overview')
        taskOverview.insertAdjacentHTML('afterbegin',
        `<div class="left">
             <input type="checkbox">
              <h6>${task.name}</h6>
        </div>

        <div class="right">
             <div class="priority">${task.priority}</div>
             <div class="date">${task.date}</div>
             <button class="task_btn delete_task material-symbols-outlined">delete</button>
        </div>`
        )
    });  
  };


  const  renderProjects= () =>{
      HTMLprojectList.innerHTML='';
      todoList.projectList.forEach( project=>{
        if(project.name==='Today'){
        }
        else{
        let projectBtn=document.createElement('button')
            projectBtn.classList.add('nav_btn')
            projectBtn.classList.add('project')
            projectBtn.innerHTML=`<span class="material-symbols-outlined">article</span>${project.name}`
            HTMLprojectList.appendChild(projectBtn)
            projectBtn.addEventListener('click',()=>{
                currentProjectName=project.name;
                renderTasks(currentProjectName);
            })
        };
      });
  };

  export  {
    currentProjectName,
    renderTasks,
    renderProjects
} 
