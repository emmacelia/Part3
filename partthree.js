"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
        //declare variables
    }
    Todo.prototype.addTask = function (task) {
        console.log("Task is" + this.tasks);
        //push that to the array
        return this.tasks.push(task);
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) { });
        console.log(this.tasks);
    };
    Todo.prototype.deleteTask = function (task) {
        //find where the task occurs in the list 
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        //tasks.splice(the let variable above, Position we want to delete);
        return this.tasks.length;
    };
    return Todo;
}());
