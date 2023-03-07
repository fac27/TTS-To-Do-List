import { createNewTodo } from "/handlers.js";
import { removeForm } from "/script.js";
// Create new To Do using the object and <template> element and add it do the DOM

export function addTodo() {
  // remove filler if its visible
  const fillerElement = document.querySelector(".empty");
  if (fillerElement.style.display == "block")
    fillerElement.style.display = "none";

  const newToDo = createNewTodo();
  const toDoContainer = document.querySelector(".todo-container");
  const template = document.querySelector("#toDoTemplate");
  const textContent = clone.querySelectorAll("p");
  const categoryIcon = clone.querySelector("img");

  const clone = template.content.cloneNode(true);
  clone.childNodes[1].id = newToDo.tag;
  textContent[0].innerText = newToDo.text;
  textContent[1].innerText = newToDo.date;
  textContent[2].innerText = newToDo.time;
  categoryIcon.setAttribute("id", newToDo.category);
  categoryIcon.src = `images/${newToDo.category}.svg`;

  toDoContainer.appendChild(clone);

  document.querySelector("#most-recent-tag").innerText = newToDo.tag;
  removeForm();
}
