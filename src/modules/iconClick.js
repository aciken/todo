import {taskArray } from "./createTask";
import { arrayNum } from "./mainChange";

const iconClick = (num) => {
    const taskShow = document.querySelector('.tasks-show');




    taskShow.addEventListener('click', (e) =>{

        const oneTask = document.querySelectorAll('.one-task')

        if( taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state[e.target.parentElement.dataset.index] === false){
            taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state[e.target.parentElement.dataset.index] = true;
        } else{
            taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state[e.target.parentElement.dataset.index] = false;
        }




        for(let i = 0; i < taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state.length; i++){
            console.log(taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state[i] == true)
            if(taskArray.tasks[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].state[i] == true){
                oneTask.forEach(task =>{
                    if(task.dataset.index == i){
                        task.classList = 'one-task clicked'
                    } 
                })
            } else{
                oneTask.forEach(task =>{
                    if(task.dataset.index == i){
                        task.classList = 'one-task'
                    } 
                })
            }
        }
    })

};

    // taskShow.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('circle-icon')) {
    //         const parentTask = e.target.closest('.one-task');

            

    //         if (parentTask) {
    //             parentTask.firstChild.innerHTML = '<svg class="circle-icon clicked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle</title><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';
    //             parentTask.classList.toggle('clicked');
    //         }
    //     }
    // });



export default iconClick