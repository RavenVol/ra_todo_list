import React from 'react';
import '../styles/App.css';
import users from '../sources/users';
import Title from './title';
import User from './user';
import TodoList from './todo';

function App() {
  return (
    <div>
      <h1>Static ToDo Lists</h1>
      {users.map(user => (
        <article className="todo-list">
          <Title name={user.name}/>
          <User user={user}/>
          <TodoList userId={user.id}/>
        </article>
      ))}
    </div>
  );
}

export default App;
