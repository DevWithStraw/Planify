import React from "react";
import "./home.scss";

import Task from "../components/task";
import Loader from "../components/skeletonloader";

import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../helpers/urls";

import axios from "axios";

export default function Home() {
  const fetchTasks = async () => {
    return await axios.get(`${baseUrl}/tasks`).then((res) => res.data);
  };

  const { data: tasks, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  if (isLoading) {
    return (
      <div className="task-skeleton-container">
        {[...Array(8)].map((_, index) => (
          <Loader key={index} />
        ))}
      </div>
    );
  }

  if (tasks && tasks.length === 0) {
    return (
      <section className="empty-tasks-section">
        <img src="/assets/icons/checked.svg" alt="checked icon" />
        <h1> Add Some Tasks </h1>
        <span> Press a to create a new task </span>
      </section>
    );
  }

  return (
    <div className="tasks-container">
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => <Task key={task.id} title={task.title} />)
      ) : (
        <section className="empty-tasks-section">
          <img src="/assets/icons/checked.svg" alt="checked icon" />
          <h1> Add Some Tasks </h1>
          <span> Press a to create a new task </span>
        </section>
      )}
    </div>
  );
}
