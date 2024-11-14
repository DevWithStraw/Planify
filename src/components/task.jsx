import React, { useState } from "react";
import "./task.scss";
import axios from "axios";
import { baseUrl } from "../helpers/urls";

export default function Task({ title, id, checked, description }) {
  const [options, setOptions] = useState(false);
  const [taskTitle, setTaskTitle] = useState(title);
  const [taskDescription, setTaskDescription] = useState(description);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const toggleTask = (event) => {
    axios.patch(`${baseUrl}/tasks/${id}`, {
      checked: event.target.checked,
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(title);
    alert("Task successfully copied! => " + title);
  };

  const removeTask = () => {
    axios.delete(`${baseUrl}/tasks/${id}`);
  };

  const updateTaskTitle = (event) => {
    setTaskTitle(event.target.value);
    axios.patch(`${baseUrl}/tasks/${id}`, {
      title: event.target.value,
    });
  };

  const updateTaskDescription = (event) => {
    setTaskDescription(event.target.value);
    axios.patch(`${baseUrl}/tasks/${id}`, {
      description: event.target.value,
    });
  };

  return (
    <div className="task-container">
      <main>
        <div className="row">
          <input
            type="checkbox"
            id={`task-${id}`}
            defaultChecked={checked}
            onClick={toggleTask}
          />

          {options ? (
            <input
              type="text"
              value={taskTitle}
              onBlur={() => setIsEditingDescription(false)}
              autoFocus
              onInput={(event) => updateTaskTitle(event)}
            />
          ) : (
            <label htmlFor={`task-${id}`}> {title} </label>
          )}
        </div>
        <button className="more-options" onClick={() => setOptions(!options)}>
          <img
            src={`/assets/icons/${options ? "up-back.png" : "more.png"}`}
            alt="more options"
          />
        </button>
      </main>
      <section className={`more-options ${options ? "opened" : ""}`}>
        <div className="description">
          {isEditingDescription ? (
            <textarea
              value={taskDescription}
              className="description-input"
              onBlur={() => setIsEditingDescription(false)}
              onInput={(event) => updateTaskDescription(event)}
              autoFocus
            />
          ) : (
            <div
              className="description-preview"
              onClick={() => setIsEditingDescription(true)}
            >
              {taskDescription}
            </div>
          )}
        </div>
        <ul className="options">
          <li>
            <button
              onClick={() => setIsEditingDescription(true)}
              className="edit"
            >
              <img src="/assets/icons/edit.png" alt="edit task" />
            </button>
          </li>
          <li>
            <button onClick={copyToClipboard} className="copyToClipboard">
              <img src="/assets/icons/copy.png" alt="copy task" />
            </button>
          </li>
          <li>
            <button onClick={removeTask} className="remove">
              <img src="/assets/icons/delete.png" alt="delete task" />
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}
