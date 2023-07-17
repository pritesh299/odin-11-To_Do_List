/* P-T-T=Project-task-tododlist*/

class Project {
    constructor(name, id) {
      this.name = name;
      this.id = id;
      this.tasks = [];
    }
  
    getName() {
      return this.name;
    }
   
    setTasks(tasks) {
      this.tasks = tasks;
    }
    getID(){
        return this.id
    }
    setID(ID){
        this.id=ID;
    }
    addTask(newTask) {
        this.tasks.push(newTask);
    }
  
    getTask(ID) {
      return this.tasks.find(task => task.getID() === ID);
    }

    deleteTask(TaskID) {
       let taskToDelete=this.getTask(TaskID)
       modifideRemove(TaskID,this.tasks)
      }
  }
  
  class Task {
    constructor(name, date = 'none', priority = 'low',id ){
      this.name = name;
      this.date = date;
      this.priority = priority;
      this.id=id;
    }
  
    getName() {
      return this.name;
    }
    getID(){
        return this.id;
    }
     setID(ID){
        this.id=ID;
    }
    getDate() {
      return this.date;
    }
  
    getPriority() {
      return this.priority;
    }
  
    get dateInFormat() {
      const day = this.date.split('-')[0];
      const month = this.date.split('-')[1];
      const year = this.date.split('-')[2];
      return `${month}/${day}/${year}`;
    }
  }
  
  class ToDoList{
    constructor() {
        this.projects = []
        this.projects.push(new Project('Today',0))
      }
    
      setProjects(projects){
        this.projects=projects;
      }
    
      getProjects(){
        return this.projects;
      }
        
     getProject(ProjectID) {
     return this.projects.find((project) => project.getID() === ProjectID)
     }

     addProject(newProject) {
        this.projects.push(newProject)
      }

     deleteProject(ProjectID) {
        const projectToDelete = this.projects.find(
          (project) => project.getID() === ProjectID
        )
         return modifideRemove(projectToDelete.getID(),this.projects)
      }
    
  }

  function modifideRemove(index,array){
    for(let i=index;i<array.length;i++){
   array[index]=array[index+1];
   index=index+1;
    }
    array.pop();
   return(array)
  }//why ist there a built in function like this,I had o refer my 12 th grade book to write this.
  
  export{
    Project,
    Task,
    ToDoList
  }