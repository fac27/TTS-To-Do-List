// let tagNumber = 0;

// function generateTagNumber() {
//   tagNumber++;
//   return tagNumber;
// }

export function createNewTodo() {
  //create variables for each form field
  // ! if (documnet.form.classlist.includes(visible) submitNewToDo())
  const textInput = document.getElementById("textInput");
  const categoryInput = document.getElementById("categoryInput");
  const dateInput = document.getElementById("dateInput");
  const timeInput = document.getElementById("timeInput");
  //also create variable for recurring choices

  //form validation
  if(textInput.value.length > 0 && 
    categoryInput.value.length > 0 && 
    (dateInput.value.replace(/[^0-9]/g,"").length) >= 8 && 
    (timeInput.value.replace(/[^0-9]/g,"").length) >= 4)
  {
    //add values to object
    const newToDo = Object.create(toDoTemplate);
    newToDo.text = textInput.value;
    newToDo.category = categoryInput.value;
    newToDo.date = dateInput.value;
    newToDo.time = timeInput.value;
    newToDo.tag = "id" + crypto.randomUUID();
    return newToDo;
  }
  // if form entries are not valid
  else {window.alert("Please enter all fields")}
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

export function handleCheck(e) {
  //changes todo element style when checked
  const todo = e.target.parentElement;
  todo.classList.toggle('completed');
}