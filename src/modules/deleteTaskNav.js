import { arrayNum } from "./mainChange";

const deleteTaskNav = () =>{
    const xIcon = document.querySelectorAll('.x-icon');
    const todoList = document.querySelector('.todo-list')




        todoList.addEventListener('click', (e) =>{
            if(e.target.classList.value == 'x-icon'){

                    for(let i = 0; i < arrayNum.taskNum.length; i++){
                        if( arrayNum.taskNum[i] == e.target.parentElement.parentElement.dataset.index){
                            arrayNum.taskNum.splice(i, 1);
                            console.log(arrayNum.taskNum)
                        }
                    }

                e.target.parentElement.parentElement.remove()

            }

            e.stopImmediatePropagation()
        
        })
    }


export default deleteTaskNav