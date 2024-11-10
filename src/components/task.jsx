import React from 'react'
import './task.scss';

export default function task({title , id}) {
  return (
    <div className='task-container'>
        <input type="checkbox" id={`${task}-${id}`} />
        <label htmlFor="task"> {title} </label>
        <div className="more-options">
            {/* icon here */}
        </div>
    </div>
  )
}
