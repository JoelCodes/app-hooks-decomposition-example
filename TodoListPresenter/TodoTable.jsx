import React from 'react';

function Spinner({ style = {}, className = "" }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 100">
      <circle cx="10" cy="50" r="2" />
      <circle cx="21.72" cy="21.72" r="3" />
      <circle cx="50" cy="10" r="4" />
      <circle cx="78.28" cy="21.72" r="5" />
      <circle cx="90" cy="50" r="6" />
      <circle cx="78.28" cy="78.28" r="7" />
      <circle cx="50" cy="90" r="8" />
      <circle cx="21.72" cy="78.28" r="9" />
    </svg>
  );
}

function Loading() {
  return (
    <tr>
      <td colSpan="2">Loading Tasks...</td>
    </tr>
  );
}

function TodoListItem({ todo: { todoName, finished }, toggle, isToggling }) {
  return (
    <tr>
      <td>{todoName}</td>
      <td>
        {isToggling ? (
          <Spinner
            style={{ width: "1em", height: "auto" }}
            className="spinning"
          />
        ) : (
          <input type="checkbox" checked={finished} onChange={toggle} />
        )}
      </td>
    </tr>
  );
}

function AddingTodos(props) {
  return (
    <tr>
      <td colSpan="2" style={{ textAlign: "center" }}>
        <em>
          Adding {props.count}&nbsp;
          {props.count === 1 ? "todo" : "todos"}...
        </em>
      </td>
    </tr>
  );
}

export function TodoTable({todos, loading, addingCount, togglingIds, toggleTodo}){
  const tableContents = loading ? (
    <Loading />
  ) : (
    todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        toggle={() => toggleTodo(todo.id)}
        isToggling={togglingIds.includes(todo.id)}
      />
    ))
  );
  return (<table>
    <thead>
      <tr>
        <td>Task</td>
        <td>Done?</td>
      </tr>
    </thead>
    <tbody>
      {tableContents}
      {addingCount > 0 && <AddingTodos count={addingCount} />}
    </tbody>
  </table>);

}