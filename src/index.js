import navFunc from "./modules/nav";
import main from "./modules/mainDiv";
import {setStorage, addTasksStorage} from "./modules/storage";
import { taskArray } from "./modules/createTask";


if(JSON.stringify(localStorage.getItem('tasks') != null)){
    taskArray.tasks = JSON.stringify(localStorage.getItem('tasks'))
}

addTasksStorage()
setStorage()
navFunc();
main();


