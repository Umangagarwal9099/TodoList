import React from "react";

export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {

  const handleRemoveTask = (id) => {
    const updateTaskList = tasklist.filter((todo) => todo.id !== id);
    setTasklist(updateTaskList);
  };

  const handleEditTask = (id) => {
    const editTask = tasklist.find((todo) => todo.id === id);
    setTask(editTask);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button onClick={() => setTasklist([])} className="clearAll">
          Clear All
        </button>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i
              onClick={() => handleEditTask(todo.id)}
              className="bi bi-pencil-square"
            ></i>
            <i onClick={() => handleRemoveTask(todo.id)} className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
