function createTask (name, number) {

    return {name, number}
}



const taskArray = (function(){

    const tasks = [];

})();

const taskDOM = (list, value, number) =>{
    taskArray.tasks.push(createTask(value,number));

    const listItem = document.createElement('li');
    listItem.textContent = value;
    list.appendChild(listItem);

} 

export default taskDOM;