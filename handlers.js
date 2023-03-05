// Submit button
submitButton.addEventListener("click", submitNewToDo)

// Submit input values to an object template

function submitNewToDo() {
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
  return newToDo
}
