import React from "react";
import { TodoTable } from "./TodoTable";
import { NewTodoForm } from "./NewTodoForm.step3";

export default function TodoListPresenter({
  todos,
  loading,
  addingCount,
  addTodo,
  toggleTodo,
  togglingIds,
}) {
  return (
    <div className="container">
      <h1>
        Get It Done! <br />
        <small>For the truly industrious</small>
      </h1>
      <TodoTable todos={todos} togglingIds={togglingIds} toggleTodo={toggleTodo} addingCount={addingCount} loading={loading}/>
      <hr />
      <NewTodoForm
        addTodo={addTodo}
        />
    </div>
  );
}
