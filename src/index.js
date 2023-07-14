import {createProjectInStroge,createTaskHTML,createTaskInStroge,createProjectHTML,projectArray,} from './project-task_mangement.js'


// Get DOM elements
const navBtn = document.getElementById('nav_btn');
const sideBar = document.getElementById('sidebar');
const dashboard = document.getElementById('dashboard_container');
const expand = document.getElementById('expand');
const projectsExpandBtn = document.getElementById('Projects_expand_btn');
const projectList = document.getElementById('project_list');
const addProjectBtn = document.getElementById('add_project_btn');
const addProjectWindow = document.getElementById('add_prjt_pop_up');
const createProjectForm=document.getElementById('add_prjt_form');
const addTaskBtn = document.getElementById('add_task_btn');
const addTaskWindow = document.getElementById('add_task_pop_up');
const darkBackground = document.getElementById('dark_background');
const addTaskForm= document.getElementById('add_task_form');

// Set initial state
let isSidebarActive = false;
let isProjectListExpanded = false;

/**
 * Toggle the sidebar and dashboard on nav button click
 */
navBtn.addEventListener('click', () => {
    isSidebarActive = !isSidebarActive;

  if (isSidebarActive) {
    sideBar.classList.add('active');
    dashboard.classList.remove('active');
  } else {
    sideBar.classList.remove('active');
    dashboard.classList.add('active');
  }
});

/**
 * Expand or collapse project list on projectsExpandBtn click
 */
projectsExpandBtn.addEventListener('click', () => {
  isProjectListExpanded = !isProjectListExpanded;

  if (isProjectListExpanded) {
    projectList.classList.add('active');
    expand.innerText = 'expand_less';
  } else {
    projectList.classList.remove('active');
    expand.innerText = 'expand_more';
  }
});

/**
 * Show add project window on addProjectBtn click
 */
addProjectBtn.addEventListener('click', () => {
  darkBackground.style.display = 'flex';
  addProjectWindow.style.transform = 'translate(-50%, -50%) scale(1)';

});

/**
 * Show add task window on addTaskBtn click
 */
addTaskBtn.addEventListener('click', () => {
  darkBackground.style.display = 'flex';
  addTaskWindow.style.transform = 'translate(-50%, -50%) scale(1)';
});

/**
 * Hide windows on dark background click
 */
darkBackground.addEventListener('click', () => {
  darkBackground.style.display = 'none';
  addTaskWindow.style.transform = 'translate(-50%, -50%) scale(0)';
  addProjectWindow.style.transform = 'translate(-50%, -50%) scale(0)';
});

createProjectForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    createProjectInStroge(projectArray.length)
    createProjectHTML(projectArray.length-1)
    darkBackground.click()
})

addTaskForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  createTaskInStroge()
  createTaskHTML()
  darkBackground.click()


})
