import { createNewTodo } from "./handlers";
// Create new To Do using the object and <template> element and add it do the DOM

export function addTodo(e) {
  console.log("button click", e.target);
  // remove filler if its visible
  const fillerElement = document.querySelector(".empty");
  if (fillerElement.style.display == "none")
    fillerElement.style.display = "block";
  const newToDo = createNewTodo(e);
  const toDoContainer = document.querySelector(".todo-container");
  const template = document.querySelector("#toDoTemplate");

  const clone = template.content.cloneNode(true);
  const textContent = clone.querySelectorAll("p");
  textContent[0].textContent = newToDo.text;
  textContent[1].textContent = newToDo.date;
  textContent[2].textContent = newToDo.time;
  clone.id = newToDo.tag;
  const categoryIcon = clone.querySelector("img");
  categoryIcon.id = newToDo.category;
  categoryIcon.src = `images/${newToDo.category}.jpg`;

  toDoContainer.appendChild(clone);
}
