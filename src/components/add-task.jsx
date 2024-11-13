// AddTask.js
import React, { useState } from "react";
import "./add-task.scss";
import axios from "axios";

import { baseUrl } from "../helpers/urls";

export default function AddTask({ onClose, className }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const addNewTask = () => {
    if (taskTitle !== "" && taskDesc !== "") {
      axios
        .post(`${baseUrl}/tasks`, {
          title: taskTitle,
          description: taskDesc,
          checked : false,
        })
        .then((res) => console.log(res.data));
      onClose(false);
    }
  };

  return (
    <div className={`new-task-container ${className}`}>
      <main>
        <button className="close" onClick={onClose}>
          <img src="/assets/icons/close.svg" alt="close icon" />
        </button>
        <section>
          <input
            type="text"
            id="taskTitle"
            placeholder="To-do name"
            value={taskTitle}
            onInput={(event) => setTaskTitle(event.target.value)}
          />
          <div className="line"></div>
          <textarea
            id="taskDescription"
            placeholder="Add a description..."
            value={taskDesc}
            onInput={(event) => setTaskDesc(event.target.value)}
          ></textarea>
        </section>
        <button className="add" onClick={addNewTask}>
          Add To-Do
        </button>
      </main>
    </div>
  );
}
