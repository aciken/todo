import { taskArray } from "./createTask";
import makeTask from "./addTask";
import oneTaskCreate from "./oneTaskCreate";
import deleteTaskNav from "./deleteTaskNav";


const arrayNum = (function(){
    let taskNum = ['1'];

    return{taskNum}
})();


const mainChange = () => {

    const tasks = document.querySelectorAll('.tasks');
    const mainNum = document.querySelector('.main-num');
    const taskNav = document.querySelectorAll('.task-nav');







        makeTask(arrayNum.taskNum);
    oneTaskCreate(taskArray.tasks[0].array, arrayNum.taskNum[length-1], taskArray.tasks[0].state)
    taskNav[0].classList.add('clicked')
deleteTaskNav()



    tasks.forEach(task =>{
        task.addEventListener('click', (e) =>{

            console.log(arrayNum.taskNum)
            if(e.target.dataset.index > 0){
            arrayNum.taskNum.push(e.target.dataset.index);
            deleteTaskNav()

            console.log(33)

            makeTask(arrayNum.taskNum)


            oneTaskCreate(taskArray.tasks[e.target.dataset.index-1].array, arrayNum.taskNum[length-1], taskArray.tasks[e.target.dataset.index-1].state)


                selectedNav(e.target.dataset.index-1)
            
            }

        })

    })



}

    const selectedNav = () =>{
        const taskNav = document.querySelectorAll('.task-nav');
        console.log(taskNav[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].classList)

        taskNav[arrayNum.taskNum[arrayNum.taskNum.length-1]-1].classList.add('clicked');
        console.log(`${arrayNum.taskNum[arrayNum.taskNum.length-1]-1} || ${arrayNum.taskNum[arrayNum.taskNum.length-2]-1}`)
        if(arrayNum.taskNum[arrayNum.taskNum.length-1]-1 == arrayNum.taskNum[arrayNum.taskNum.length-2]-1){

        } else{
   
        if(arrayNum.taskNum.length > 1){
            taskNav[arrayNum.taskNum[arrayNum.taskNum.length-2]-1].classList.remove('clicked')
        }
    }
    }




export {mainChange, arrayNum}