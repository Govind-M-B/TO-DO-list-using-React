// import React , {useState, useEffect} from 'react'
// import "./App.css"
// import { TaskForm } from './components/TaskForm';
// import TaskColumns from './components/TaskColumns';
// import todoIcon from './assets/Untitled.png'
// import doingIcon from './assets/Star.png'
// import doneIcon from './assets/tick.png'
// import NavBar from './components/Navbar';

// const oldTasks= localStorage.getItem("tasks")
// console.log(oldTasks)


//  const App = () => {
//   const [tasks, setTasks]= useState(JSON.parse(oldTasks) || [])

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks))
//   }, [tasks] )

//   const handleDelete = (taskIndex) => {
//     const newTasks=tasks.filter((task, index) => index !== taskIndex )
//     setTasks(newTasks)

//   }

//   const columns = [
//     { title: "To Do", icon: todoIcon, status: "todo" },
//     { title: "Doing", icon: doingIcon, status: "doing" },
//     { title: "Done", icon: doneIcon, status: "done" }
//   ]

//   console.log("tasks", tasks)
//   return (
//     <div className='app'>
//       <NavBar />
//       <TaskForm  setTasks={setTasks} />
//       <main className='app_main'> 
//       {columns.map((column, index) => (
//           <TaskColumns 
//             key={index} 
//             title={column.title} 
//             icon={column.icon} 
//             tasks={tasks} 
//             status={column.status} 
//             handleDelete={handleDelete} 
//           />
//         ))}
//       </main>
//     </div>
//   );
// };

// export default App



import React, { useState, useEffect } from 'react';
import './App.css';
import { TaskForm } from './components/TaskForm';
import TaskColumns from './components/TaskColumns';
// import todoIcon from './assets/Untitled.png';
// import doingIcon from './assets/Star.png';
// import doneIcon from './assets/tick.png';
import NavBar  from './components/NavBar';
import StarsIcon from '@mui/icons-material/Stars';
import FlareRoundedIcon from '@mui/icons-material/FlareRounded';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

// Define a counter for unique IDs
let taskIdCounter = 1;

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to generate a unique ID based on the last task's ID
  const generateUniqueId = () => {
    // If there are no tasks, start with an ID of 1
    if (tasks.length === 0) return 1;
    
    // Otherwise, return the last task's ID + 1
    const lastTaskId = tasks[tasks.length - 1].id;
    return lastTaskId + 1;
  };


  // Add new task with unique ID
  const handleAddTask = (taskData) => {
    const newTask = {
      ...taskData,
      id: generateUniqueId(), // Assign a unique ID
    };
    setTasks((prev) => [...prev, newTask]);
  };

  // Handle deleting a task
  const handleDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  // Handle editing a task
  const handleEdit = (taskId, updatedTitle) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, task: updatedTitle }; // Update the title
      }
      return task;
    });
    setTasks(newTasks);
  };

  const columns = [
    { title: 'To Do', icon: <FlareRoundedIcon className="custom-icon" />, status: 'todo' },
    { title: 'Doing', icon: <StarsIcon className="custom-icon" />, status: 'doing' },
    { title: 'Done', icon: <VerifiedOutlinedIcon className="custom-icon" />, status: 'done' },
  ];

  return (
    <div className="app">
      <NavBar />
      <TaskForm handleAddTask={handleAddTask} />
      <main className="app_main">
        {columns.map((column, index) => (
          <TaskColumns
            key={index}
            title={column.title}
            icon={column.icon}
            tasks={tasks}
            status={column.status}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </main>
    </div>
  );
};

export default App;




