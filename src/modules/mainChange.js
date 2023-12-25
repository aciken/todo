import { taskArray } from "./createTask";
import makeTask from "./addTask";
import oneTaskCreate from "./oneTaskCreate";

const mainChange = () => {

    const tasks = document.querySelectorAll('.tasks');
    const mainNum = document.querySelector('.main-num');

    let taskNum = ['1'];



        makeTask(taskNum);
    oneTaskCreate(taskArray.tasks[0].array)
    



    tasks.forEach(task =>{
        task.addEventListener('click', (e) =>{
            if(e.target.dataset.index > 0){
            taskNum.push(e.target.dataset.index);



            }

            makeTask(taskNum)

            oneTaskCreate(taskArray.tasks[e.target.dataset.index-1].array)

        })

    })

}






export default mainChange;