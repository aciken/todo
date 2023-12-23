import { taskArray } from "./createTask";

const mainChange = () => {
    const tasks = document.querySelectorAll('.tasks');
    const mainNum = document.querySelector('.main-num');

    tasks.forEach(task =>{
        task.addEventListener('click', (e) =>{

            taskArray.tasks.forEach(task =>{
                if(task.number = e.target.dataset.index){
                    console.log(task.number)
                }
            })
        })
    })
}

export default mainChange;