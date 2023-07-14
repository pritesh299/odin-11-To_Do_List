let navBtn=document.getElementById('nav_btn')
let sideBar=document.getElementById('sidebar')
let Dashbord=document.getElementById('dashboard_container')
let expand=document.getElementById('expand')
let projectsExpandBtn=document.getElementById('Projects_expand_btn')
let projectList=document.getElementById('project_list')
let addProjectBtn=document.getElementById('add_project_btn')
let addProjectWindow=document.getElementById('add_prjt_pop_up')
let addTaskBtn=document.getElementById('add_task_btn')
let addTaskWindow=document.getElementById('add_task_pop_up')
let darkBackground=document.getElementById('dark_background')

let count=0;
let index=0;
navBtn.addEventListener('click',()=>{
 if(count%2===0){ 
    sideBar.classList.add('active')
    Dashbord.classList.remove('active')

} 
 else{
    sideBar.classList.remove('active')
    Dashbord.classList.add('active')

}
  count++;
})


projectsExpandBtn.addEventListener('click',expandList=()=>{
    if(index%2===0){ 
        projectList.classList.add('active')
        expand.innerText='expand_less'
    } 
    else{
        projectList.classList.remove('active')
        expand.innerText='expand_more'
    }
    index++
})

addProjectBtn.addEventListener('click',()=>{
     darkBackground.style.display='flex';
     addProjectWindow.style.display='flex';
})

addTaskBtn.addEventListener('click',()=>{

    darkBackground.style.display='flex';
     addTaskWindow.style.display='flex';

})

darkBackground.addEventListener('click',()=>{
    darkBackground.style.display='none';
    addTaskWindow.style.display='none';
    addProjectWindow.style.display='none';


})