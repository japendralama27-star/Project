let todoList=[];
displayitem();

function addTodo(){
    let inputElement =document.querySelector('#todo-input');
    let todoItem =inputElement.value;
    todoList.push(todoItem);
    inputElement.value='';

    displayitem();
}

function displayitem()
{
    let containerElement=document.querySelector('.todo-container');

    let newHtml ='';

    for(let i=0;i<todoList.length;i++)
    {
        newHtml+=`
        <div>
        <span>${todoList[i]}</span>
        <button onclick="todoList.splice(${i},1);displayitem();">Delete</button>
        </div>
        `;
    }
    containerElement.innerHTML=newHtml;
}