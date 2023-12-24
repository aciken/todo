import { taskArray } from "./createTask";
import makeTask from "./addTask";

const mainChange = () => {
    const tasks = document.querySelectorAll('.tasks');
    const mainNum = document.querySelector('.main-num');

    let taskNum = [];

    tasks.forEach(task =>{
        task.addEventListener('click', (e) =>{
            if(e.target.dataset.index > 0){
            taskNum.push(e.target.dataset.index);
            }
            console.log(taskNum);
            makeTask(taskNum)


        })

    })

}




export default mainChange;