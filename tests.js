//Simon - test 1
// import {} from './handlers'
// import {} from './script'
// import {} from './renderers'

test("Submitting a new task adds it to the list", () => {
  // Get the object for the values inputted and find the tag to check against the created To Do

  const inputObject = submitNewToDo();
  const tagToTest = inputObject.tag;

  // Reassign the data from the created To Do to an object in the same format as the values inputted object

  const toDoTest = toDoContainer.querySelector(`#${tagToTest}`);
  const iconForCategoryToTest = toDoTest.querySelector("img");
  const categoryToTest = iconForCategoryToTest.id;
  const outputObject = {
    text: toDoTest.querySelector("#textContent"),
    category: categoryToTest,
    date: toDoTest.querySelector("#date"),
    time: toDoTest.querySelector("#time"),
    tag: toDoTest.id,
  };

  // Carry out checks\

  const result = inputObject;
  const expected = outputObject;
  equal(result.text, expected.text);
  equal(result.category, expected.category);
  equal(result.date, expected.date);
  equal(result.time, expected.time);
  equal(result.tag, expected.tag);
});
