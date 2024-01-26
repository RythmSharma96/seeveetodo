import React from 'react'
import { useState } from 'react'
import Tasks from './Tasks';
import AddTask from './AddTask';
import {AnimatePresence, motion} from 'framer-motion';


const TasksWrapper = () => {
    const[tasks, setTasks] = useState([
      {id : '1', title : 'Apply to Seevee on Wellfound', completed : true},
      {id: '2' , title : 'Schedule an Introduction Call', completed :true},
      {id: '3', title : 'Submit Frontend Work', completed : false}
    ]);


    const toggleComplete = id => {
      setTasks(tasks.map(task => task.id === id ? {...task, completed : !task.completed} : task))
  }

  const addTask = title => {
    setTasks([...tasks, { id: tasks.length + 1 , title : title , completed : false }])
  }

  const deleteTask = () => {
    setTasks(tasks.filter( task => task.id != tasks.length ))
  }

  return (
    <div className="flex min-h-screen justify-center font-medium bg-gray-800">
    <div   className="p-8 text-gray-200">
    <div   className="flex items-center mb-6">
      <svg   className="h-8 w-8 text-indigo-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
      <h4 className="font-semibold ml-3 text-lg">Ray's Jobs</h4> 
    </div>

    <AnimatePresence>
    {tasks.map((task, index) => (

            <motion.div
            key={index}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >

            <Tasks task = {task} key = {index} toggleComplete = {toggleComplete} />
            </motion.div>
    ))}
    </AnimatePresence>
      <AddTask addTask = {addTask}/>
      <button onClick={deleteTask}  className='m-5 start-0 hover:bg-red-500 border-gray-600 bg-red-600 px-3 py-2 m-1 rounded-md justify-right text-sm text-gray-300'> delete </button>
  </div>
  </div>
  )
}

export default TasksWrapper