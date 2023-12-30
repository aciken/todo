import { taskArray } from "./createTask"
import { taskDOM } from "./createTask"
import oneTaskCreate from "./oneTaskCreate"

const setStorage = () =>{
    const array = JSON.parse(localStorage.getItem('tasks'))

    if(JSON.parse(localStorage.getItem('tasks')) !== null){
        taskArray.tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    console.log(array)
}

const addTasksStorage = () =>{
    
    const tasks = document.querySelector('.tasks');
    
    const array = JSON.parse(localStorage.getItem('tasks'))

    if(JSON.parse(localStorage.getItem('tasks')) !== null){
 
        const forLenght = JSON.parse(localStorage.getItem('tasks')).length

        
        for(let i = 1; i < forLenght; i++){
            taskDOM(tasks, array[i].name)
            for(let j = 0 ; j < array[i].array.length; j++){
                console.log(`${array[i].array[j]} || ${i} || ${array[i].state[j]}`)
                oneTaskCreate(array[i].array[j], i-1, array[i].state[j])
            }
        }
        taskArray.tasks = array

        console.log(taskArray.tasks)

        }
        

}

export {setStorage, addTasksStorage}