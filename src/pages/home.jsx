import React from "react";
import "./home.scss";

import Task from "../components/task";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { baseUrl } from "../helpers/urls";

export default function home() {
  const fetchTasks = async () => {
    return await axios.get(`${baseUrl}/tasks`).then((res) => res.data);
  };

  const { data: tasks } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  return (
    <>
      {tasks ? (
        tasks?.map((task) => <Task title={task.title} />)
      ) : (
        <section className="empty-tasks-section">
          <img src="/assets/icons/checked.svg" alt="checked icon" />
          <h1> Add Some Tasks </h1>
          <span> Press a to create a new task </span>
        </section>
      )}
    </>
  );
}
