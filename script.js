const todoList = [];

renderTodoList();


function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    todoListHTML += `<p>${todo}</p>`;
  }
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

const button = document.querySelector('.button');

button.addEventListener('click', () => {
  const inputElement = document.querySelector('input');
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);
  
  inputElement.value = '';

  renderTodoList();
})