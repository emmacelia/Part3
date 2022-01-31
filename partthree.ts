 import {TasksInterface} from './Taskinterface';

class Todo implements TasksInterface{
  
     tasks:Array<string> = [];

    addTask(task:string):number{

        console.log("Task is" +this.tasks);
         //push that to the array
     return this.tasks.push(task);
     
     }


     listAllTasks():void{

        this.tasks.forEach(function(task){})
        
        console.log(this.tasks);
        }

        deleteTask(task:string):number{

            //find where the task occurs in the list 
            let index:number = this.tasks.indexOf(task);
            
            if (index>-1 ){
                this.tasks.splice(index, 1);
            }
            //tasks.splice(the let variable above, Position we want to delete);
            return this.tasks.length;
            
            }

            //declare variables

}
