function loadTodos() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTodos(data));
}
function displayTodos(todos) {
  const todosContainer = document.getElementById("todos-container");
  for (const todo of todos) {
    const childDiv = document.createElement("div");
    childDiv.innerHTML = `
        <h4>Number: ${todo.id}</h4>
        <h3>Title: ${todo.title}</h3>
        <p>Is completed? ${todo.completed === true ? 'Yes' : 'No'} </p>
    `;
    todosContainer.appendChild(childDiv);
  }
  console.log(todos);
}

loadTodos();
