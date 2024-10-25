function AddTodo() {
  const inputElement = document.querySelector("input");
  const value = inputElement.value;
  console.log(value);
}

function DeleteTodo(index) {
  const element = document.getElementById("todo" + index);
  element.parentNode.removeChild(element);
}
