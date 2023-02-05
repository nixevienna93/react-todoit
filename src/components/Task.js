import React from 'react'

const Task = ({ title, time, checked = false }) => {
  return (
    <li>
        <div className='task-icon'>
            { checked ? (
                <span class="material-symbols-outlined">
                    radio_button_checked
                </span>
            ) : (
                <span class="material-symbols-outlined">
                    radio_button_unchecked
                </span>
            ) }
        </div>
        <div className='task-title'>{title}</div>
        <div className='task-time'>{time}</div>
    </li>
  )
}

export default Task