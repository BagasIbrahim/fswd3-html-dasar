const Form = document.querySelector(".todo-form");
const Input = document.querySelector(".todo-input");
const ItemList = document.querySelector(".todo-items");
// array which stores every todos
let todos = [];
Form.addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo(Input.value);
});

// function to add todo
function addTodo(item) {
  if (item !== "") {
    const todo = {
      id: Date.now(),
      name: item,
      completed: false,
    };
    // then add it to todos array
    todos.push(todo);
    addToLocalStorage(todos);
    Input.value = "";
  }
}

// function to render given todos to screen
function renderTodos(todos) {
  ItemList.innerHTML = "";
  todos.forEach(function (item) {
    // check if the item is completed
    const checked = item.completed ? "checked" : null;
    const li = document.createElement("li");
    li.setAttribute("class", "item");
    li.setAttribute("item", item.id);

    // if item is completed, then add a class to <li> called 'checked', which will add line-through style
    if (item.completed === true) {
      li.classList.add("checked");
    }
    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;
    ItemList.append(li);
  });
}

// function to add todos to local storage
function addToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos);
}

// function helps to get everything from local storage
function getFromLocalStorage() {
  const reference = localStorage.getItem("todos");
  if (reference) {
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}

// toggle the value to completed and not completed
function toggle(id) {
  todos.forEach(function (item) {
    if (item.id == id) {
      item.completed = !item.completed;
    }
  });
  addToLocalStorage(todos);
}

// deletes a todo from todos array, then updates localstorage and renders updated list to screen
function deleteTodo(id) {
  todos = todos.filter(function (item) {
    return item.id != id;
  });
  addToLocalStorage(todos);
}

// initially get everything from localStorage
getFromLocalStorage();
ItemList.addEventListener("click", function (event) {
  // check if the event is on checkbox
  if (event.target.type === "checkbox") {
    toggle(event.target.parentElement.getAttribute("item"));
  }
  if (event.target.classList.contains("delete-button")) {
    deleteTodo(event.target.parentElement.getAttribute("item"));
  }
});
