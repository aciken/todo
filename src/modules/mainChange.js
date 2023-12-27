import { taskArray } from "./createTask";
import makeTask from "./addTask";
import oneTaskCreate from "./oneTaskCreate";


const arrayNum = (function(){
    let taskNum = ['1'];

    return{taskNum}
})();


const mainChange = () => {

    const tasks = document.querySelectorAll('.tasks');
    const mainNum = document.querySelector('.main-num');





        makeTask(arrayNum.taskNum);
    oneTaskCreate(taskArray.tasks[0].array, arrayNum.taskNum[length-1], taskArray.tasks[0].state)
    



    tasks.forEach(task =>{
        task.addEventListener('click', (e) =>{
            if(e.target.dataset.index > 0){
            arrayNum.taskNum.push(e.target.dataset.index);
            }

            console.log(33)

            makeTask(arrayNum.taskNum)


            oneTaskCreate(taskArray.tasks[e.target.dataset.index-1].array, arrayNum.taskNum[length-1], taskArray.tasks[e.target.dataset.index-1].state)

        })

    })

}






export {mainChange, arrayNum}