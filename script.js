import { getFilterMenuOption } from "./handlers.js";
import { removeTodo } from "./handlers.js";
import { addTodo } from "./renderers.js";
import { createTodoTest } from "./tests/index.test.js";

if (confirm("Run tests?")) createTodoTest();

document.querySelector("#addButton").addEventListener("click", showForm);
document.querySelector("#bin").addEventListener("click", removeTodo);
document.querySelector("#back").addEventListener("click", removeForm);
const dropdownMenu = document.getElementById("filterDropdown");
dropdownMenu.addEventListener("change", filterToDos);

const sources = document.querySelectorAll("#todo-container > *");
console.log(sources);
sources.forEach((element) => {
  element.addEventListener("drag", (event) => console.log(event));
});

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
    document.querySelector("#textInput").focus();
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
  const selectedCategory = getFilterMenuOption();
  const toDos = document.querySelectorAll(".todo-container > div");

  toDos.forEach((toDo) => {
    const category = toDo.querySelector(".category").textContent;
    if (selectedCategory === "" || category === selectedCategory) {
      toDo.style.display = "flex";
    } else {
      toDo.style.display = "none";
    }
  });
}
