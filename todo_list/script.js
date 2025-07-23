const todoInput = document.querySelector("#todoInput");
const addTodoBtn = document.querySelector("#addTodoBtn");
const todoList = document.querySelector("#todoList");

let todos = [];
let nextTodoId = 1;

function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("할 일을 입력해주세요");
    return;
  }

  const newTodo = {
    id: nextTodoId++,
    text: todoText,
    isEditing: false, //수정중인지 여부를 나타내는 플래그
  };

  todos.push(newTodo);
  console.log(todos);
  todoInput.value = "";
  todoInput.focus();
}

addTodoBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodoBtn.click();
  }
});
