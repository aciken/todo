import {taskArray } from "./createTask";

const iconClick = (num) => {
    const taskShow = document.querySelector('.tasks-show');

    taskShow.addEventListener('click', (e) =>{
        console.log(num);
        if( taskArray.tasks[num].state[e.target.parentElement.dataset.index] === false){
        taskArray.tasks[num].state[e.target.parentElement.dataset.index] = true;
        } else{
            taskArray.tasks[num].state[e.target.parentElement.dataset.index] = false;
        }
    })

    // taskShow.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('circle-icon')) {
    //         const parentTask = e.target.closest('.one-task');

            

    //         if (parentTask) {
    //             parentTask.firstChild.innerHTML = '<svg class="circle-icon clicked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle</title><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';
    //             parentTask.classList.toggle('clicked');
    //         }
    //     }
    // });
};


export default iconClick