const oneTaskCreate = (array) =>{

const taskShow = document.querySelector('.tasks-show');
console.log(array)


if(taskShow.childElementCount > 0){
    while (taskShow.firstChild) {
        taskShow.removeChild(taskShow.firstChild);
    }
    
}


for(let i = 0; i < array.length; i++){

    toDoCreate(array[i]);
}

}

const toDoCreate = (text) =>{
    
    const taskShow = document.querySelector('.tasks-show');

    // taskShow.children.remove();

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('one-task');
    taskShow.appendChild(taskDiv);



    const svgString = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';
    taskDiv.innerHTML = svgString;

    const taskText = document.createElement('p');
    taskText.textContent = text;
    taskDiv.appendChild(taskText);

}

export default oneTaskCreate