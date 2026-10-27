let todoList=[
    {
        item:'Buy milk',
        dueDate: '4/10/2026'
    },
    {
        item:'Go to College',
        dueDate: '4/10/2026'
    }
];
displayitem();

function addTodo(){
    let inputElement =document.querySelector('#todo-input');
     let dateElement =document.querySelector('#todo-date');
    let todoItem =inputElement.value;
    let todoDate=dateElement.value;
    todoList.push({item: todoItem,dueDate:todoDate});
    inputElement.value='';
    dateElement.value='';

    displayitem();
}

function displayitem()
{
    let containerElement=document.querySelector('.todo-container');

    let newHtml ='';

    for(let i=0;i<todoList.length;i++)
     {
        // let item=todoList[i].item;
        // let dueDate=todoList[i].dueDate;
        let {item, dueDate}=todoList[i];
        newHtml+=`
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i},1);displayitem();">Delete</button>
        `;
    }
    containerElement.innerHTML=newHtml;
}