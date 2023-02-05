import React from 'react'

import '../assets/css/Tasks.css'
import Task from './Task'

const Tasks = () => {
  return (
    <div className='tasks-section'>
        <h2>You have 10 tasks for today</h2>

        <ul className='tasks'>
            <Task title={'Master React JS with Firebase'} time={'10:00 pm'} checked={true} />

            <Task title={'Master MERN Stack'} time={'11:00 pm'} />

            <Task title={'Master Next JS'} time={'12:00 pm'}/>

            <Task title={'Master Gatsby JS'} time={'1:00 pm'} />

            <Task title={'Master React Native'} time={'2:00 pm'} />
        </ul>
    </div>
  )
}

export default Tasks