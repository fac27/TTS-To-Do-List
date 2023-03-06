// Sure there is a way to do this without declaring a global variable but can't think of it right now! This is to keep track of To Dos
import { submitNewToDo, removeTodo } from "handlers";

document.querySelector("#addButton").addEventListener("click", submitNewToDo);
document.querySelector("#bin").addEventListener("click", removeTodo);

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
