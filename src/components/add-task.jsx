// AddTask.js
import React, { useState } from "react";
import "./add-task.scss";
import axios from "axios";

import { baseUrl } from "../helpers/urls";

export default function AddTask({ onClose, className }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const addNewTask = async () => {
    if (taskTitle !== "" && taskDesc !== "") {
      try {
        const response = await axios.post(`${baseUrl}/tasks`, {
          title: taskTitle,
          description: taskDesc,
          checked: false,
        });
        console.log(response.data);
        onClose(false);
      } catch (error) {
        console.log(error.message);
      }
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
