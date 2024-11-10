// newTasks.js
import React, { useState } from "react";
import AddButton from "../components/add-button";
import AddTask from "../components/add-task";

export default function NewTasks() {
  const [toggleTask, setToggleTask] = useState(false);

  function handleTask() {
    setToggleTask((prevState) => !prevState);
  }

  function handleClose() {
    setToggleTask(false);
  }

  return (
    <>
      {toggleTask && (
        <AddTask
          onClose={handleClose}
          className={toggleTask ? 'slide-up' : 'slide-down'}
        />
      )}
      <AddButton onClicked={handleTask} />
    </>
  );
}
