import { removeTodo } from "./handlers";
import { addTodo } from "./renderers";

document.querySelector("#addButton").addEventListener("click", addTodo);
document.querySelector("#bin").addEventListener("click", removeTodo);

// save todos to local storage
function saveToStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Sure there is a way to do this without declaring a global variable but can't think of it right now! This is to keep track of To Dos
let tagNumber = 0;

export function generateTagNumber() {
  tagNumber++;
  return tagNumber;
}

// Object template

const toDoTemplate = {
  text: "",
  category: "",
  date: "",
  time: "",
  tag: 0,
};
