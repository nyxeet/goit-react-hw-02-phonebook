import React from 'react';
import './ContactsList.css';

const TaskList = ({ tasks }) => (
  <ul className="TaskList">
    {tasks.map(({ id, name, number}) => (
        <li key={id}>{ name }: {number}</li>
    ))}
  </ul>
);

export default TaskList;