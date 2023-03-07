import { createNewTodo } from "/handlers.js";
import { test, equal } from "./test-helpers.js";
//Simon - test 1

test("Submitting a new task adds it to the list", () => {
  // Get the object for the values inputted and find the tag to check against the created To Do
  const inputObject = {
    text: "hello",
    category: "shop",
    date: "2023-02-03",
    time: "21:32",
    tag: "",
  };

  document.querySelector("#addButton").click();

  document.getElementById("textInput").value = inputObject.text;
  document.getElementById("categoryInput").value = inputObject.category;
  document.getElementById("dateInput").value = inputObject.date;
  document.getElementById("timeInput").value = inputObject.time;

  document.querySelector("#addButton").click();

  const tagToTest = document.querySelector("#most-recent-tag").innerText;
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

  // Carry out checks\

  const actual = outputObject;
  const expected = inputObject;
  equal(actual.text, expected.text);
  equal(actual.category, expected.category);
  equal(actual.date, expected.date);
  equal(actual.time, expected.time);
  equal(actual.tag, expected.tag);

  document.querySelector(`#todo-form`).reset();
});

// ! ====== redundant tests.

// test("Checking an item on a list is given a new class name to show it is complete", () => {
//   changedClass(handleComplete, "#item", ".complete");
// });

// function changedClass(handler, selector, expectedClass) {
//   handler(e);
//   if (document.querySelector(selector).classlist.includes(expectedClass)) {
//     console.info("Pass: handler did change class");
//   } else {
//     console.error("Fail: handler did not change class");
//   }
// }

// test("Check when a list item is removed the list of Todos is reduced by one", () => {
//   if (equals(removeTodoItem().length, TodoList.length - 1)) {
//     console.info("Pass: removeTodoItem did not remove item from list");
//   } else {
//     console.error("Fail: removeTodoItem did not remove item from list");
//   }
// });
