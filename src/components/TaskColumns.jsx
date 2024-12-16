// import React from 'react'
// import './TaskColumns.css'
// import TaskCard from './Taskcard'


// // import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';


// const TaskColumns = ({title, icon, tasks, status, handleDelete}) => {
  
//   return (
//     <section className='task_column'>
//         <h2 className='task_column-heading'>
//           <img className='task_column_icon' src={icon} alt='' />
//         {title} </h2>
//       {
//         tasks.map(
//           (task, index) => task.status === status && (<TaskCard key={index} 
//           title={task.task} tags={task.tags} handleDelete={handleDelete} index={index}
//           />)
//       )}
//     </section>
//   )
// }

// export default TaskColumns

import React from 'react';
import './TaskColumns.css';
import TaskCard from './TaskCard' ;

const TaskColumns = ({ title, icon, tasks, status, handleDelete, handleEdit }) => {
  return (
    <section className="task_column">
      <h2 className="task_column-heading">
        {icon}
         {title}
      </h2>
      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <TaskCard
            key={task.id}
            task={task.task}
            tags={task.tags}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            id={task.id}
          />
        ))}
    </section>
  );
};

export default TaskColumns;
