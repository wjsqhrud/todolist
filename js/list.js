const input = document.querySelector(".todo__container__addBox__input");
const addBtn = document.querySelector(".todo__container__addBox__addBtn");
const todoList = document.querySelector(".todo__container__list");

const addTodoItem = (text) => {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo__container__item");

  const span = document.createElement("span");
  span.textContent = text;

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn__container");

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete_btn");
  completeBtn.innerHTML = '<i class="fa-regular fa-face-meh"></i>';
  completeBtn.addEventListener("click", () => {
    span.classList.toggle("completed");
    if (span.classList.contains("completed")) {
      completeBtn.innerHTML =
        '<i class="fa-regular fa-face-smile smile_icon"></i>';
      span.style.textDecoration = "line-through";
    } else {
      completeBtn.innerHTML = '<i class="fa-regular fa-face-meh"></i>';
      span.style.textDecoration = "none";
    }
  });
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete_btn");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteBtn.addEventListener("click", () => {
    todoItem.remove();
  });

  todoItem.appendChild(span);
  todoItem.appendChild(btnContainer);
  todoItem.appendChild(completeBtn);
  todoItem.appendChild(deleteBtn);
  todoList.appendChild(todoItem);
  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(deleteBtn);
};
addBtn.addEventListener("click", () => {
  const newTask = input.value.trim();
  if (newTask) {
    addTodoItem(newTask);
    input.value = "";
  }
});
