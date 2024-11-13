import React from "react";
import "./task.scss";
import axios from "axios";
import { baseUrl } from "../helpers/urls";

export default function task({ title, id, checked }) {
  const toggleTask = (event) => {
    axios.patch(`${baseUrl}/tasks/${id}`, {
      checked: event.target.checked,
    });
  };

  return (
    <div className="task-container">
      <input
        type="checkbox"
        id={`task-${id}`}
        defaultChecked={checked}
        onClick={toggleTask}
      />
      <label htmlFor={`task-${id}`}> {title} </label>
      <div className="more-options">{/* icon here */}</div>
    </div>
  );
}
