const todoList = [{name: 'learn javascript', date: '2023-11-25'}];

console.log(todoList);
renderTodoList();


function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name } = todoObject;
    const { date } = todoObject;
    todoListHTML += `<p>${name} ${date}<button onClick="todoList.splice(${i}, 1); renderTodoList();">Delete</button></p>`;
    }
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

const button = document.querySelector('.button');

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