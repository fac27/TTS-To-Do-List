// Create new To Do using the object and <template> element and add it do the DOM

function addNewToDo() {
    const newToDo = submitNewToDo();
    const toDoContainer = document.querySelector('#toDoContainer');
    const template = document.querySelector('#toDoTemplate');
  
    const clone = template.content.cloneNode(true);
    const textContent = clone.querySelectorAll('p');
    textContent[0].textContent = newToDo.text;
    textContent[1].textContent = newToDo.date;
    textContent[2].textContent = newToDo.time;
    clone.id = newToDo.tag;
    const categoryIcon = clone.querySelector('img');
    categoryIcon.id = newToDo.category
    categoryIcon.src = `icons/${newToDo.category}.jpg`
  
    toDoContainer.appendChild(clone);
}
  
