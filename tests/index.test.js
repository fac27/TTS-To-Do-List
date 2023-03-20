import { filterToDos } from "../script.js";
import { test, equal } from "./test-helpers.js";

// integration tests
const createTodoTest = () =>
  test("Submitting a new task adds it to the list", () => {
    // Get the object for the values inputted and find the tag to check against the created To Do
    const inputObject = {
      text: "hello",
      category: "shop",
      date: "2023-02-03",
      time: "21:32",
      tag: "",
    };

    const add = document.getElementById("addButton");
    // add.addEventListener("onclick", (e) => e.preventDefault);
    add.click();

    console.log(document.getElementById("textInput").value);

    document.getElementById("textInput").value = inputObject.text;
    document.getElementById("categoryInput").value = inputObject.category;
    document.getElementById("dateInput").value = inputObject.date;
    document.getElementById("timeInput").value = inputObject.time;

    add.click();
    const tagToTest = document.querySelector("#most-recent-tag").innerText;
    console.log("continue");
    inputObject.tag = tagToTest;

    // Reassign the data from the created To Do to an object in the same format as the values inputted object

    const todoTest = document.querySelector(`#${tagToTest}`);
    const iconForCategoryToTest = todoTest.querySelector("img");
    const categoryToTest = iconForCategoryToTest.id;
    const outputObject = {
      text: todoTest.querySelector("#textContent").innerText,
      category: categoryToTest,
      date: todoTest.querySelector("#date").innerText,
      time: todoTest.querySelector("#time").innerText,
      tag: todoTest.id,
    };

    // Carry out checks
    const actual = outputObject;
    const expected = inputObject;
    equal(actual.text, expected.text);
    equal(actual.category, expected.category);
    equal(actual.date, expected.date);
    equal(actual.time, expected.time);
    equal(actual.tag, expected.tag);

    document.querySelector(`#todo-form`).reset();

    testChecked(todoTest);
    testFilter(element);
    testDelete(todoTest);
  });

const testDelete = (element) =>
  test("Deleting an entry removes it from the list", () => {
    console.log(element);
    let elementExists = element === undefined ? false : true;

    // test visible
    equal(elementExists, true);

    // simulate userInput (drag and drop on bin)
    // drag(DragEvent())
    element.remove();
    // ...

    // check item was removed from dom
    equal(elementExists, false);
  });

// unit test

const testChecked = (element) =>
  test("Checked items are visibly checked", () => {
    equal(element.classList.includes("completed"), false);
    handleCheck({ target: element });
    equal(element.classList.includes("completed"), true);
    handleCheck({ target: element });
    equal(element.classList.includes("completed"), false);
  });

const testFilter = (element, filter = "shop") =>
  test("Toggling the filter hides completed tasks from the list", () => {
    filterToDos(filter);
    equal(element.style.display, "flex");
    filterToDos("");
    equal(element.style.display, "flex");
    filterToDos("work");
    equal(element.style.display, "none");
  });

export { createTodoTest };
