let control = 1;

function AddTodo() {
  const inputElement = document.querySelector("input");
  const Todo = inputElement.value;

  const newDivElement = document.createElement("div");
  newDivElement.setAttribute("id", control);
  control = control + 1;

  newDivElement.innerHTML =
    "<div>" +
    Todo +
    `</div><div><button onclick='DeleteTodo(${newDivElement.id})'>Delete!</button></div>`;

  document.querySelector("body").appendChild(newDivElement);
}

function DeleteTodo(id) {
  const element = document.getElementById(id);
  element.parentNode.removeChild(element);
}
