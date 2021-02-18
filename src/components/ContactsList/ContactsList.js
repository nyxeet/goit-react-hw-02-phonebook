import React from 'react';
import './ContactsList.css';
import PropTypes from 'prop-types';

const TaskList = ({ tasks, onRemove }) => (
  <ul className="TaskList">
    {tasks.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => onRemove(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemove: PropTypes.func,
};

export default TaskList;
