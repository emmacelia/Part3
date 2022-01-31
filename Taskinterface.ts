export interface TasksInterface{

    tasks:Array<string>;
    addTask(task:string):Number;
    listAllTasks():void;
    deleteTask(task:string):number;
  
    
}