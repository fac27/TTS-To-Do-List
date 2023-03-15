import { createNewTodo, handleCheck } from "/handlers.js";
import { removeForm } from "./script.js";
// Create new To Do using the object and <template> element and add it do the DOM

let dragged;

export function addTodo() {
  // remove filler if its visible
  const fillerElement = document.querySelector(".empty");
  if (fillerElement.style.display == "block")
    fillerElement.style.display = "none";

  const newToDo = createNewTodo();
  const toDoContainer = document.querySelector(".todo-container");
  const template = document.querySelector("#toDoTemplate");
  const clone = template.content.cloneNode(true);
  const textContent = clone.querySelectorAll("p");
  const checkBox = clone.querySelector("input");
  const categoryIcon = clone.querySelector("img");

  textContent[0].textContent = newToDo.text;
  textContent[1].textContent = newToDo.category;
  textContent[2].textContent = newToDo.date;
  textContent[3].textContent = newToDo.time;
  clone.id = newToDo.tag;

  checkBox.addEventListener("change", handleCheck);

  clone.id = newToDo.tag;
  clone.childNodes[1].id = newToDo.tag;
  textContent[0].innerText = newToDo.text;
  textContent[1].innerText = newToDo.date;
  textContent[2].innerText = newToDo.time;
  categoryIcon.setAttribute("id", newToDo.category);
  categoryIcon.src = `images/${newToDo.category}.svg`;

  toDoContainer.appendChild(clone);

  document.querySelector("#most-recent-tag").innerText = newToDo.tag;
  removeForm();

  // init drag event listeners
  drag(newToDo.tag);
}

function drag(tag) {
  const source = document.getElementById(`${tag}`);
  const target = document.getElementById("bin");

  source.addEventListener("dragstart", (event) => {
    console.log(event);
    dragged = event.target;
    target.classList.add("waiting");
    event.target.classList.add("dragging");
  });
  source.addEventListener("dragend", (event) => {
    event.target.classList.remove("dragging");
    target.classList.remove("waiting");
  });

  target.addEventListener(
    "dragover",
    (event) => {
      event.preventDefault();
    },
    false
  );
  target.addEventListener("dragenter", (event) => {
    if (event.target.classList.contains("dropzone")) {
      event.target.classList.add("dragover");
    }
  });
  target.addEventListener("dragleave", (event) => {
    if (event.target.classList.contains("dropzone")) {
      event.target.classList.remove("dragover");
    }
  });
  target.addEventListener("drop", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("dropzone")) {
      event.target.classList.remove("dragover");
      dragged.remove();
    }
  });
}

document
  .getElementById("filter")
  .addEventListener("click", toggleFilterVisibility);

export function toggleFilterVisibility() {
  const filterDropdown = document.getElementById("filterDropdown");
  filterDropdown.classList.toggle("display-none");
}
