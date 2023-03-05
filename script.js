// Sure there is a way to do this without declaring a global variable but can't think of it right now! This is to keep track of To Dos

let tagNumber = 0

function generateTagNumber() {
  tagNumber ++;
  return tagNumber
}

// Object template

const toDoTemplate = {
    text: "",
    category: "",
    date: "",
    time: "",
    tag: 0
}