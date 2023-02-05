import React from 'react'
import Tasks from '../components/Tasks'
import TodoCategories from '../components/TodoCategories'

const Home = () => {
  return (
    <main className='main'>
        <div className='wrap'>

            <TodoCategories />

            <Tasks />

            <div className='text-center btn-wrap'>
                <button className='btn'>Add New Todo</button>
            </div>
        </div>
    </main>
  )
}

export default Home