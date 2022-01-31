
//create an array of tasks 

let tasks:Array<String> = [];

//create an add task function

function addTask(task:string):number{

   console.log("Task is" +tasks);
    //push that to the array
return tasks.push(task);



}

function listAllTasks():void{

tasks.forEach(function(task){})

console.log(tasks);
}

function deleteTask(task:string){

//find where the task occurs in the list 
let index:number = tasks.indexOf(task);

if (index>-1 ){
    tasks.splice(index, 1);
}
//tasks.splice(the let variable above, Position we want to delete);
return tasks.length;

}

addTask("Part A");

addTask("Part B");

addTask("Part C");