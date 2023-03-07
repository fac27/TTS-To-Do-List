//Simon - test 1

test("Submitting a new task adds it to the list", () => {
  // Get the object for the values inputted and find the tag to check against the created To Do

  const inputObject = submitNewToDo();
  const tagToTest = inputObject.tag;

  // Reassign the data from the created To Do to an object in the same format as the values inputted object

  const toDoToTest = toDoContainer.querySelector(`#${tagToTest}`);
  const iconForCategoryToTest = toDoToTest.querySelector("img");
  const categoryToTest = iconForCategoryToTest.id;
  const outputObject = {
    text: toDoToTest.querySelector("#textContent"),
    category: categoryToTest,
    date: toDoToTest.querySelector("#date"),
    time: toDoToTest.querySelector("#time"),
    tag: toDoToTest.id,
  };

  // Carry out checks

  const result = inputObject;
  const expected = outputObject;
  equal(result.text, expected.text);
  equal(result.category, expected.category);
  equal(result.date, expected.date);
  equal(result.time, expected.time);
  equal(result.tag, expected.tag);
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
