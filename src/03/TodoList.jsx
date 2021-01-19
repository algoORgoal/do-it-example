import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    const todoList = [
      { taskName: '빨래하기', finised: false },
      { taskName: '공부하기', finished: true },
    ];

    return (
      <div>
        {todoList.map((todo) => (
          <div key={todo.taskName}>{todo.taskName}</div>
        ))}
      </div>
    );
  }
}

export default TodoList;
