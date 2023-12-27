import {taskArray } from "./createTask";
import { arrayNum } from "./mainChange";
import oneTaskCreate from "./oneTaskCreate";

const iconClick = (num) => {
    const taskShow = document.querySelector('.tasks-show');
    console.log(1)
    deleteIconClick()
    editIconClick()


    taskShow.addEventListener('click', (e) =>{

        const oneTask = document.querySelectorAll('.one-task')


        if(e.target.classList.value == 'circle-icon' || e.target.parentElement.classList.value == 'circle-icon clicked'){
        if( taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state[e.target.parentElement.dataset.index] == false){
            taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state[e.target.parentElement.dataset.index] = true;
        } else if(taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state[e.target.parentElement.parentElement.dataset.index] == true){
            taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state[e.target.parentElement.parentElement.dataset.index] = false;
        }

        oneTaskCreate(taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].array, arrayNum.taskNum[arrayNum.taskNum.length-1]-1, taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state)
    }
    

    })

};

const deleteIconClick = () =>{

    const taskShow = document.querySelector('.tasks-show');

    taskShow.addEventListener('click', (e) =>{
        if(e.target.classList.value == 'delete-icon'){
        taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].array.splice(e.target.parentElement.parentElement.dataset.index, 1)
        taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state.splice(e.target.dataset.index, 1)
        oneTaskCreate(taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].array, arrayNum.taskNum[arrayNum.taskNum.length-1]-1, taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state)
        }
    })
}

const editIconClick = () => {
    const taskShow = document.querySelector('.tasks-show');
    const editPopUp = document.querySelector('.edit-popup');
    const editInput = document.querySelector('.edit-input')
    const cancle = document.querySelector('.edit-cancle');
    const edit = document.querySelector('.edit-confirm');
    let index;
    let newState;
    taskShow.addEventListener('click', (e) => {

        if (e.target.classList.contains('edit-icon')) {

            editPopUp.classList.add('clicked');
            index = e.target.parentElement.parentElement.dataset.index;
            console.log(newState)

        }



        cancle.addEventListener('click', (event) =>{
            editPopUp.classList.remove('clicked');
            editInput.value = '';
            event.stopImmediatePropagation();
        })

        edit.addEventListener('click', (event) =>{
            if(editInput.value != ''){          
            editPopUp.classList.remove('clicked');
            console.log(taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state)
            taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].array[index] = editInput.value;  
            editInput.value = '';
            oneTaskCreate(taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].array, arrayNum.taskNum[arrayNum.taskNum.length-1]-1, taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state)

            event.stopImmediatePropagation();
            }
        })
    })
}




export {iconClick, deleteIconClick}