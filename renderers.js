import { createNewTodo } from "/handlers.js";
import { removeForm } from "/script.js";
// Create new To Do using the object and <template> element and add it do the DOM

export function addTodo(e) {
  e.preventDefault();
  console.log("button click", e.target);
  // remove filler if its visible
  const fillerElement = document.querySelector(".empty");
  if (fillerElement.style.display == "block")
    fillerElement.style.display = "none";
  const newToDo = createNewTodo(e);
  const toDoContainer = document.querySelector(".todo-container");
  const template = document.querySelector("#toDoTemplate");

  const container = document.createElement("div");
  container.classList.add("flex", "justify-end", "align-center");

  const clone = template.content.cloneNode(true);
  const textContent = clone.querySelectorAll("p");
  textContent[0].textContent = newToDo.text;
  textContent[1].textContent = newToDo.category;
  textContent[2].textContent = newToDo.date;
  textContent[3].textContent = newToDo.time;
  clone.id = newToDo.tag;
  const categoryIcon = clone.querySelector("img");
  categoryIcon.id = newToDo.category;
  categoryIcon.src = `images/${newToDo.category}.svg`;

  container.appendChild(clone);
  toDoContainer.appendChild(container);

  removeForm();
}

document.getElementById("filter").addEventListener("click", toggleFilterVisibility)

export function toggleFilterVisibility() {
  const filterDropdown = document.getElementById("filterDropdown");
  filterDropdown.classList.toggle("display-none")
}