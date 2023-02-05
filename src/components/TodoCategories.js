import React from 'react'

import '../assets/css/TodoCategories.css'

const TodoCategories = () => {
  return (
    <div className='todo-categories-section'>
        <h2>Categories</h2>
        <ul className='todo-categories'>
            <li>Work</li>
            <li>Personal</li>
            <li>Shopping</li>
            <li>Health</li>
        </ul>
    </div>
  )
}

export default TodoCategories