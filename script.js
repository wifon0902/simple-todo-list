const todoList = [];

renderTodoList();


function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    todoListHTML += `<p>${todo} <button onClick="todoList.splice(${i}, 1); renderTodoList();">Delete</button></p>`;
    }
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

const button = document.querySelector('.button');

button.addEventListener('click', () => {
  const inputElement = document.querySelector('input');
  const name = inputElement.value;

  if (name === '') {
    return;
  } else {
    todoList.push(name);
    console.log(todoList);
    
    inputElement.value = '';
  
    renderTodoList();
  }  
})