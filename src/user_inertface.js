
import { todo,removeTask } from './storage.js';
const projectList = document.getElementById('project_list');
const taskList=document.getElementById('task_list');
const projectHeadline=document.getElementById('project_headText')
let currentProjectID=0;




 function  createProjectHTML(projectID){
 
   let project=document.createElement('button');
   let fileIcon=document.createElement('span');
   project.classList.add('nav_btn','project');
   project.setAttribute('id',`${projectID}`);
   fileIcon.classList.add('material-symbols-outlined');

  project.addEventListener('click',()=>{
  
    loadTasks(projectID)
    currentProjectID=projectID;
    projectHeadline.textContent=todo.getProject(currentProjectID).name;
    
   })


   fileIcon.innerText='article';
   projectList.appendChild(project);
   project.appendChild(fileIcon);
   project.innerHTML+=todo.getProject(projectID).name;

 }



function createTaskHTML(projectID){

      let taskID=todo.getProject(projectID).tasks.length-1;
     let task=document.createElement('div');
     let taskOverview=document.createElement('div');
     let left=document.createElement('div');
     let checkBox=document.createElement('input')
     let right=document.createElement('div')
     let editTask=document.createElement('button')
     let DeleteTask=document.createElement('button')
     
     task.setAttribute('class','task')
     task.setAttribute('id',`P${projectID}T${taskID}`)
     taskOverview.setAttribute('class','task_overview')
     right.setAttribute('class','right')
     left.setAttribute('class','left')
     editTask.setAttribute('class','edit_task')
     editTask.setAttribute('class','task_btn')
     editTask.setAttribute('class','material-symbols-outlined')
     DeleteTask.setAttribute('class','delete_task')
     DeleteTask.setAttribute('class','task_btn')
     DeleteTask.setAttribute('class','material-symbols-outlined')
     checkBox.setAttribute('type','checkBox')

     editTask.textContent='edit'
     DeleteTask.textContent='delete'
      DeleteTask.addEventListener('click',()=>{

         removeTask(projectID,taskID);
         removeTaskHTML(projectID,taskID)
     })
    
     taskList.appendChild(task)
     task.appendChild(taskOverview)
     taskOverview.appendChild(left)
     taskOverview.appendChild(right)
     left.appendChild(checkBox)
     right.appendChild(editTask)
     right.appendChild(DeleteTask)

    
     checkBox.insertAdjacentHTML('afterend',`<h6>${todo.getProject(projectID).getTask(taskID).name}</h6>`)
}

function removeTaskHTML(projectID,TaskID){

   let task=document.getElementById(`P${projectID}T${TaskID}`)
   taskList.removeChild(task)
   
}
 
function loadTasks(projectID){
  console.log(`projecctID=${projectID},currentProjecct${currentProjectID}`)
   console.log(todo)
  for(let i=0;i<todo.getProject(currentProjectID).tasks.length;i++){
    removeTaskHTML(currentProjectID,i)
  }
for(let i=0;i<todo.getProject(projectID).tasks.length;i++){
  console.log(`Current${projectID,i}`)
  createTaskHTML(projectID,i) 
}
}


export{
  createProjectHTML,
   createTaskHTML,
   currentProjectID
}

