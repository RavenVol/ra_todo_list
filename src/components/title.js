import React from 'react';

const Title = ({name}) => (
  <div className="todo-label">
    <h2 className="todo-header">ToDo List for {name}</h2>
  </div>
);

export default Title;