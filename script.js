import { getFilterMenuOption } from "./handlers";
import { removeTodo } from "/handlers.js";
import { addTodo } from "/renderers.js";

document.querySelector("#addButton").addEventListener("click", showForm);
document.querySelector("#bin").addEventListener("click", removeTodo);
document.querySelector("#back").addEventListener("click", removeForm);

// save todos to local storage, call after renderer to addTodo
function saveToStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function showForm(event) {
  // this stops checkign required fields
  event.preventDefault();
  const formElement = document.querySelector("#todo-form");
  if (formElement.style.display === "none") {
    formElement.style.display = "flex";
  } else {
    addTodo(event);
  }
}

function removeForm() {
  console.log("hide form");
  const form = document.querySelector("#todo-form");
  form.style.display = "none";
  form.reset();
}

export { removeForm };

export function filterToDos() {
  const filterSelected = getFilterMenuOption();
  console.log(filterSelected)
  if(filterSelected === "shop") {
    
  }
}
