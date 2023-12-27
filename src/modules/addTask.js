import { taskArray } from "./createTask";
import oneTaskCreate from "./oneTaskCreate";


const makeTask = (number) =>{


    const addTask = document.querySelector('.add-task');
    const main = document.querySelector('.main');
    const addPart = document.querySelector('.add-part');

    

    addTask.addEventListener('click', () =>{

        if(addPart.childElementCount < 2){
        

        addTask.classList.toggle('clicked');

        const inputDiv = document.createElement('div');
        inputDiv.classList.add('input-todo');
        addPart.appendChild(inputDiv);


        const addInput = document.createElement('input');
        addInput.classList.add('task-input')
        inputDiv.appendChild(addInput);
    
    
        const btnDiv = document.createElement('div');
        btnDiv.classList.add('task-btn');
        inputDiv.appendChild(btnDiv);
    
        const BtnCreate = document.createElement('a');
        BtnCreate.classList.add('task-create');
        BtnCreate.textContent = 'Create';
        btnDiv.appendChild(BtnCreate);
        BtnCreate.addEventListener('click', () =>{
            if(addInput.value !== ''){
                taskArray.tasks.forEach(element => {

                    if(element.number == number[number.length-1]){
                        element.array.push(addInput.value);
                        console.log("STATE PUSHED")
                        element.state.push(false);
                        console.log(`${element.array} || ${number[number.length-1]} || ${element.state}`)
                        oneTaskCreate(element.array, number[number.length-1], element.state)
                        console.log(element)
                    }
                });


                inputDiv.remove();
                addTask.classList.toggle('clicked');

            }

        })
    
    
    
        const BtnCancle = document.createElement('a');
        BtnCancle.classList.add('task-cancle');
        BtnCancle.textContent = 'Cancle';
        btnDiv.appendChild(BtnCancle);

        BtnCancle.addEventListener('click', () =>{
            inputDiv.remove();
            addTask.classList.toggle('clicked');
        })

    }

    })


}

// const toDoCreate = (text) =>{
//     const taskShow = document.querySelector('.tasks-show');

//     const taskDiv = document.createElement('div');
//     taskDiv.classList.add('one-task');
//     taskShow.appendChild(taskDiv);



//     const svgString = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';
//     taskDiv.innerHTML = svgString;

//     const taskText = document.createElement('p');
//     taskText.textContent = text;
//     taskDiv.appendChild(taskText);

// }







export default makeTask;

