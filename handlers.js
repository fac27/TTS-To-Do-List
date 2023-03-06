import { generateTagNumber } from "./script";

// Submit input values to an object template
// ! if we use the same button for showingthe form and submiting the form
// ! then we need a condition to check if the form is visible or not

export function createNewTodo() {
  // ! if (documnet.form.classlist.includes(visible) submitNewToDo())
  const textInput = document.getElementById("textInput");
  const categoryInput = document.getElementById("categoryInput");
  const dateInput = document.getElementById("dateInput");
  const timeInput = document.getElementById("timeInput");
  //also create variable for recurring choices

  const newToDo = Object.create(toDoTemplate);
  newToDo.text = textInput.value;
  newToDo.category = categoryInput.value;
  newToDo.date = dateInput.value;
  newToDo.time = timeInput.value;
  newToDo.tag = generateTagNumber();
  return newToDo;
}

export function removeTodo(event) {
  event.target.parentElement.remove();
}
