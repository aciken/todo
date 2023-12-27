import {taskArray } from "./createTask";
import { arrayNum } from "./mainChange";
import oneTaskCreate from "./oneTaskCreate";

const iconClick = (num) => {
    const taskShow = document.querySelector('.tasks-show');

    deleteIconClick()


    taskShow.addEventListener('click', (e) =>{

        const oneTask = document.querySelectorAll('.one-task')



        if( taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state[e.target.parentElement.dataset.index] == false){
            taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state[e.target.parentElement.dataset.index] = true;
        } else if(taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state[e.target.parentElement.parentElement.dataset.index] == true){
            taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state[e.target.parentElement.parentElement.dataset.index] = false;
        }

        oneTaskCreate(taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].array, arrayNum.taskNum[arrayNum.taskNum.length-1]-1, taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state)



    })

};

const deleteIconClick = () =>{

    const taskShow = document.querySelector('.tasks-show');

    taskShow.addEventListener('click', (e) =>{
        if(e.target.classList.value == 'delete-icon'){
        taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].array.splice(e.target.dataset.index, 1)
        taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state.splice(e.target.dataset.index, 1)
        oneTaskCreate(taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].array, arrayNum.taskNum[arrayNum.taskNum.length-1]-1, taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state)
        }
    })
}




export {iconClick, deleteIconClick}