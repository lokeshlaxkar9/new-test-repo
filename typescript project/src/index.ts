const btn = document.querySelector('#btn')! as HTMLButtonElement;
const input = document.querySelector('#todoinput')! as HTMLInputElement;
const form = document.querySelector('#todoform')! as HTMLFormElement;
const todoList = document.querySelector('#todolist')! as HTMLLIElement;

interface Todo {
    text: string;
    completed: boolean;
}

const todos: Todo[] = readTodo();

todos.forEach(createTodo);

function readTodo(): Todo[] {
    const todoJSON = localStorage.getItem('todos');
    if (!todoJSON) return [];
    return JSON.parse(todoJSON);
}



function handleSubmit(e:SubmitEvent) {
    e.preventDefault();
    const newTask = {
        text: input.value,
        completed: false
    }
    createTodo(newTask);
    todos.push(newTask);
    localStorage.setItem('todos', JSON.stringify(todos))
    input.value = '';
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function createTodo(todo:Todo) {
    const newLI = document.createElement('li'); 
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        saveTodos()
    })
    newLI.append(checkbox)
    newLI.append(todo.text)
    todoList.append(newLI);
}


form.addEventListener('submit', handleSubmit)



