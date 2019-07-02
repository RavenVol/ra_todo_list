import React from 'react';
import todos from '../sources/todos';

const TodoList = ({userId}) => (
  <div className="work-list">
    <ul>
      {todos.filter(todo => todo.userId === userId).map(todo => (
        <li>
          <label>
            <input type="checkbox" checked={todo.completed} />
            {todo.title}
          </label>
        </li>
      ))}
    </ul>
  </div>
);

export default TodoList;