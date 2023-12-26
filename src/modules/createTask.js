function createTask (name, number) {

    const array = [];
    let state = [];
    
    return {name, number, array, state}
}



const taskArray = (function(){


    const tasks = [];
    tasks.push(createTask('MyToDoList', 1));


    return{tasks}
})();

const taskDOM = (list, value) =>{
    if(value !== ''){

    
    taskArray.tasks.push(createTask(value, taskArray.tasks.length+1))

    const listItem = document.createElement('li');
    listItem.textContent = value;
    listItem.dataset.index = taskArray.tasks.length;
    list.appendChild(listItem);
    }
    console.log(taskArray.tasks);
} 

export {taskDOM, taskArray};