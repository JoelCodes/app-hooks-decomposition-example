
import { generateRandomId, delayResolve } from "./utils";

const todos = [
  {
    "todoName": "Walk Dog",
    "finished": true,
    "id": "A12345678Z"
  },
  {
    "todoName": "Buy Bread",
    "finished": false,
    "id": "B12345678Y"
  }
];

// () => Promise<Todo[]>
export function getTodos() {
  return delayResolve(todos.map(todo => ({ ...todo })));
}

// (todoName:String) => Promise<Todo>
export function addTodo(todoName){
  const newTodo = {
    todoName,
    finished: false,
    id: generateRandomId()
  };
  todos.push(newTodo);
  return delayResolve({ ...newTodo });
};

// (id:String) => Promise<Todo>
export function toggleTodo(id){
  const foundTodo = todos.find(t => t.id === id);
  if (foundTodo) {
    foundTodo.finished = !foundTodo.finished;
  }
  return delayResolve(foundTodo && { ...foundTodo });
};
