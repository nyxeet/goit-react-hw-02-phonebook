import React from 'react';
import './ContactsList.css';

const TaskList = ({ tasks }) => (
  <ul className="TaskList">
    {tasks.map(({ id, text, tel}) => (
      <li key={id}>{text}: {tel}</li>
    ))}
  </ul>
);

export default TaskList;