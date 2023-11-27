const todoList = [{name: 'learn javascript', date: '2023-11-25'}];

console.log(todoList);
renderTodoList();


function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {
    const { name } = todoObject;
    const { date } = todoObject;
    
    todoListHTML += `
      <div>${name}</div>
      <div>${date}</div>
      <button class="delete-button" onClick="todoList.splice(${index}, 1); renderTodoList();">Delete</button>
    `;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

const button = document.querySelector('.add-button');

button.addEventListener('click', () => {
  const inputNameElement = document.querySelector('.input-name');
  const name = inputNameElement.value;

  const inputDateElement = document.querySelector('.input-date');
  const date = inputDateElement.value;


  if (name === '' || date === '') {
    return;
  } else {
    todoList.push({
      name,
      date
    });
    console.log(todoList);
    
    inputNameElement.value = '';
    inputDateElement.value = '';
  
    renderTodoList();
  }  
})