import {iconClick} from "./iconClick";
import {taskArray } from "./createTask";
import { arrayNum } from "./mainChange";
import {setStorage} from "./storage";

const oneTaskCreate = (array ,num ,state ) => {
    const taskShow = document.querySelector('.tasks-show');






    taskShow.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        toDoCreate(array[i], i, state);
    }


};

const toDoCreate = (text, index, state) => {
    localStorage.setItem('tasks', JSON.stringify(taskArray.tasks));  

    setStorage()

    const taskShow = document.querySelector('.tasks-show');
    const taskDiv = document.createElement('div');


    if(state[index] == true){
        taskDiv.classList = 'one-task clicked' ;
        taskShow.appendChild(taskDiv);
        
        const svgString = '<svg class="circle-icon clicked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle</title><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>'
        taskDiv.innerHTML = svgString;
    } else {
        taskDiv.classList = 'one-task' 
        taskShow.appendChild(taskDiv);

        const svgString = '<svg class="circle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';
        taskDiv.innerHTML = svgString;
    }


    taskDiv.dataset.index = index;


    const taskText = document.createElement('p');
    taskText.textContent = text;
    taskDiv.appendChild(taskText);

    const iconDiv = document.createElement('div');
    iconDiv.classList.add('icon-div');
    taskDiv.appendChild(iconDiv);

    const svgString1 = '<svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>';
    iconDiv.innerHTML = svgString1;

    const svgString2 = '<svg class="edit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>';
    iconDiv.innerHTML += svgString2;

    



};


export default oneTaskCreate