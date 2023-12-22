const navFunc = () => {

    const taskClick = document.querySelector('.task-click');
    const todoList = document.querySelector('.todo-list');
    const listDiv = document.querySelector('.tasks');

    

    taskClick.addEventListener('click', () =>{
        todoList.classList.toggle('clicked');
    })

    addProject(listDiv);

}

const addProject = (list) =>{

    const addBtn = document.querySelector('.add-project');
    
    addBtn.addEventListener('click', () =>{
            addBtn.style.cssText = 'display:none';
            addInput(addBtn.parentElement, addBtn, list)
        } 
        
    )}


const addInput = (originDiv, btn, list) => {
    const inputDiv = document.createElement('div');
    originDiv.appendChild(inputDiv);


    const addInput = document.createElement('input');
    addInput.classList.add('add-input')
    inputDiv.appendChild(addInput);


    const btnDiv = document.createElement('div');
    btnDiv.classList.add('btn-div');
    inputDiv.appendChild(btnDiv);

    const BtnCreate = document.createElement('a');
    BtnCreate.classList.add('create');
    BtnCreate.textContent = 'Create';
    btnDiv.appendChild(BtnCreate);



    const BtnCancle = document.createElement('a');
    BtnCancle.classList.add('cancle');
    BtnCancle.textContent = 'Cancle';
    btnDiv.appendChild(BtnCancle);

    BtnCancle.addEventListener('click', () =>{
        inputDiv.remove();
        btn.style.cssText = 'display:flex';
    })

    BtnCreate.addEventListener('click', () =>{
        console.log()
        inputDiv.remove();
        btn.style.cssText = 'display:flex';
        createListItem(list, addInput.value);
    })

}


const createListItem = (list, value) =>{



    const listItem = document.createElement('li');
    listItem.textContent = value;
    list.appendChild(listItem)

}




export default navFunc;