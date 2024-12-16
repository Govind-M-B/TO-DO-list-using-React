// import React, {useState} from 'react'
// import Tag from './Tag'
// import './TaskForm.css';


// const array=[
//   {label:"To do", value:"todo"},{label:"Doing", value:"doing"},{label:"Done", value:"done"}
// ]


//  export const TaskForm = ({setTasks}) => {
//   const [taskData, setTaskData]= useState({
//     task:"",
//     status:"todo",
//     tags: []
//   })

  
// const checkTag = (tag) => {
//   return taskData.tags.some(item => item === tag)
// }

//   const selectTag = (tag) => {
//      if(taskData.tags.some(item => item === tag)) {
//       const filterTags = taskData.tags.filter(item => item !== tag)
//       setTaskData(prev => {
//         return {...prev , tags: filterTags}
//       })
//      } else{
//       setTaskData(prev => {
//         return{...prev, tags : [...prev.tags ,tag] }
//       } )
//      }
//   }

  


//   const handleChange = (e) => {
//     const { name, value }=e.target

//     setTaskData(prev => {
//       return { ...prev, [name]: value}
//     })


//   }
  

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(taskData)
//     setTasks(prev => {
//       return [...prev, taskData]
//     })
//     setTaskData({
//       task:"",
//       status:"todo",
//       tags: []
//     })
//   }

// //   const [task, setTask]= useState("");
// //   const [status, setStatus]= useState("todo")

// //   const handleTaskChange = e => {
// //     setTask(e.target.value)
// //  }

// //   const handleStatusChange = e => {
// //      setStatus(e.target.value)
// //   }
// //   console.log(task,status);

//   return (
//     <header className='app_header'> 
//     <form onSubmit={handleSubmit}>
//         <input type='text' className='task_input'  
//         name="task"
//         placeholder='Enter your task'
//         onChange={handleChange}
//         value={taskData.task}
//         />
//         <div className='task_form_bottom_line'>
//         <div>
           
//            <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
//            <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
//            <Tag tagName="Javascript" selectTag={selectTag} selected={checkTag("Javascript")}/>
//            <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")}/>
    
//         </div>
//         <div>
//         <select 
//         className='task_status'
//         value={taskData.status}
//         name='status' 
//         onChange={handleChange} >
            
//   {array.map((item) => {
//             return (
//               <option key={item.value} value={item.value}>
//                 {item.label}
//               </option>
//             );
//           })}
//         </select>
        
//         <button type='submit' className='task_submit'>
//             + Add Task
//         </button>
//         {/* <button class="custom-btn btn-9">Read More</button> */}
//         </div>
//         </div>
//     </form>
//     </header>
//   )
// }

// // export default TaskForm;

import React, { useState } from 'react';
import Tag from './Tag';
import './TaskForm.css';

const tagList = ['HTML', 'CSS', 'Javascript', 'React'];

const array = [
  { label: 'To do', value: 'todo' },
  { label: 'Doing', value: 'doing' },
  { label: 'Done', value: 'done' },
];

export const TaskForm = ({ handleAddTask }) => {
  const [taskData, setTaskData] = useState({
    task: '',
    status: 'todo',
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(taskData); // Add task with unique ID
    setTaskData({
      task: '',
      status: 'todo',
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="task_input"
          name="task"
          placeholder="Enter your task"
          onChange={handleChange}
          value={taskData.task}
        />
        <div className="task_form_bottom_line">
        <div>
        {tagList.map((tag) => (
          <Tag 
            key={tag} 
            tagName={tag} 
            selectTag={selectTag} 
            selected={checkTag(tag)} 
          />

        ))}
      </div>
          <div>
            <select
              className="task_status"
              value={taskData.status}
              name="status"
              onChange={handleChange}
            >
              {array.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>

            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};
