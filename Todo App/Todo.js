let todoList = [];

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let todoItem = inputElement.value;

    todoList.push(todoItem);

    inputElement.value = '';

    displayItems();
}

function displayItems(){

    let displayElements = document.querySelector('#todo-items');

    displayElements.innerText = '';
    for( let i = 0 ; i < todoList.length; i++){
        displayElements.innerText = displayElements.innerText + '\n'+todoList[i];
    }
}