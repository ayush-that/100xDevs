const prompt = require("prompt-sync")({ sigint: true });
const fs = require("fs");
const file = "todos.json";

function showTodo() {
  const todos = readTodos();
  todos.forEach((todo) => {
    const status = todo.completed ? "✔️ Completed" : "❌ Not Completed";
    console.log(`${todo.id}. ${todo.text} - ${status}`);
  });
}

function readTodos() {
  const data = fs.readFileSync(file, "utf-8");
  return JSON.parse(data);
}

function writeTodo(todos) {
  fs.writeFileSync(file, JSON.stringify(todos, null, 1), "utf-8");
}

function AddTodo() {
  const userInput = prompt("Enter a new todo: ");
  const todos = readTodos();
  const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

  const newTodo = { id: nextId, text: userInput, completed: 0 };
  todos.push(newTodo);
  writeTodo(todos);
  console.log("Todo added!");
}

function deleteTodo() {
  const todos = readTodos();
  showTodo();
  const idToDelete = parseInt(prompt("Enter the ID of the todo to delete: "));

  const updatedTodos = todos.filter((todo) => todo.id !== idToDelete);
  const renumberedTodos = updatedTodos.map((todo, index) => {
    return { id: index + 1, text: todo.text, completed: todo.completed };
  });

  writeTodo(renumberedTodos);
  console.log(`Todo with ID ${idToDelete} deleted.`);
}

function completeTodo() {
  const todos = readTodos();
  showTodo();
  const idToComplete = parseInt(
    prompt("Enter the ID of the todo to mark as completed: ")
  );

  const updatedTodos = todos.map((todo) => {
    if (todo.id === idToComplete) {
      return { ...todo, completed: 1 };
    }
    return todo;
  });

  writeTodo(updatedTodos);
  console.log(`Todo with ID ${idToComplete} marked as completed.`);
}

function main() {
  console.log("WELCOME TO TODO APP");
  console.log("1. Show Todos");
  console.log("2. Add a Todo");
  console.log("3. Delete a Todo");
  console.log("4. Mark Todo as Completed");

  let userAns = parseInt(prompt("ENTER YOUR CHOICE: "));

  switch (userAns) {
    case 1:
      showTodo();
      break;
    case 2:
      AddTodo();
      break;
    case 3:
      deleteTodo();
      break;
    case 4:
      completeTodo();
      break;
    default:
      console.log("Invalid choice. Please try again.");
  }

  main();
}

main();
