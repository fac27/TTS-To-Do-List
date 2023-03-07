let tagNumber = 0;

function generateTagNumber() {
  tagNumber++;
  return tagNumber;
}

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

// Object template
const toDoTemplate = {
  text: "",
  category: "",
  date: "",
  time: "",
  tag: 0,
};

export function removeTodo(event) {
  event.target.parentElement.remove();
}
