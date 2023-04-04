"use strict";
const btn = document.querySelector('#btn');
const input = document.querySelector('#todoinput');
const form = document.querySelector('#todoform');
const todoList = document.querySelector('#todolist');
const todos = readTodo();
todos.forEach(createTodo);
function readTodo() {
    const todoJSON = localStorage.getItem('todos');
    if (!todoJSON)
        return [];
    return JSON.parse(todoJSON);
}
function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
        text: input.value,
        completed: false
    };
    createTodo(newTask);
    todos.push(newTask);
    localStorage.setItem('todos', JSON.stringify(todos));
    input.value = '';
}
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function createTodo(todo) {
    const newLI = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(checkbox);
    newLI.append(todo.text);
    todoList.append(newLI);
}
form.addEventListener('submit', handleSubmit);
