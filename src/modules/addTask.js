const addTask = () =>{

    const taskIcon = document.querySelector('.add-task-icon');
    const addTask = document.querySelector('.add-task');
    const main = document.querySelector('.main');

    

    addTask.addEventListener('click', () =>{

        addTask.classList.toggle('clicked');

        const inputDiv = document.createElement('div');
        main.appendChild(inputDiv);
    
    
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
    
    
    
        const BtnCancle = document.createElement('a');
        BtnCancle.classList.add('task-cancle');
        BtnCancle.textContent = 'Cancle';
        btnDiv.appendChild(BtnCancle);

    })
}

export default addTask;

