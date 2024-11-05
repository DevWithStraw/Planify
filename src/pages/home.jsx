import React from 'react'
import "./home.scss";

import Task from '../components/task';

export default function home() {


  return (
    <>
    {tasks?.map((task)=>(
      <Task title={task.title}/>
    ))}
    </>
  )
}
