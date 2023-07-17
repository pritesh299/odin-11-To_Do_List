import { Project, Task, ToDoList } from './P-T-T.js'
import {createProjectInStroge, removeTaskInStroge, createTaskHTML,createTaskInStroge,createProjectHTML,projectArray,} from './user_inertface.js'


let taskName=document.getElementById('Task_name')
let PriorityType=document.getElementById('Priority_type')
let date=document.getElementById('date')
const projectNameInput=document.getElementById('project_name_input')

let todo= new ToDoList()

function addTask(projectID){
    let projectToAddTask=todo.getProject(projectID) 
    let task=new Task(taskName.value,date.value,PriorityType.value,projectToAddTask.tasks.length)
    todo.getProject(projectID).addTask(task)
    console.log(todo)

}

function addProject(){
    let project= new Project(projectNameInput.value,todo.projects.length)
    todo.addProject(project)
}
function removeTask(projectID,taskID){

    todo.getProject(projectID).deleteTask(taskID)

}
export{
    todo,addTask,addProject,removeTask
}