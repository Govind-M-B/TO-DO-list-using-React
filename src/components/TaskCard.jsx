// import React from 'react'

// import './TaskCard.css'
// import Tag from './Tag'
// import deleteIcon from '../assets/delete.png'
// import EditNoteIcon from '@mui/icons-material/EditNote';

// const Taskcard = ({title, tags, handleDelete, index}) => {
//   return (
//    <article className='task_card'>
//     <p className='task_text'>{title}</p>
//     <div className='task_card_bottom_line'>
//         <div className='task_card_tags'>
//             {
//                 tags.map((tag, index) => (<Tag key={index} tagName={tag} selected={true}/>) )
//             }
            
//         </div>
//         <div className='task_delete' onClick={() =>  handleDelete(index)} >
//             <img src={deleteIcon} className='delete_icon' alt='' />
//         </div>
//     </div>
//    </article>
//   )
// }

// export default Taskcard

import React, { useState } from 'react';
import './TaskCard.css';
import Tag from './Tag';
import deleteIcon from '../assets/delete.png';
import EditNoteIcon from '@mui/icons-material/EditNote';

const TaskCard = ({ task, tags, handleDelete, handleEdit, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task);

  const handleSave = () => {
    handleEdit(id, editedTitle); // Pass the task ID and updated title
    setIsEditing(false);
  };

  return (
    <article className="task_card">
      {isEditing ? (
        <div className="task_card_edit">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="task_card_input"
            placeholder="Edit your task title..."
          />
          <button onClick={handleSave} className="task_card_save_btn">
            Save
          </button>
        </div>
      ) : (
        <p className="task_text">{task}</p>
      )}
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>
        <div className="task_icons">
          <div className="task_delete" onClick={() => handleDelete(id)}>
            <img src={deleteIcon} className="delete_icon" alt="Delete" />
          </div>
          <div className="task_edit" onClick={() => setIsEditing(true)}>
            <EditNoteIcon className="edit_icon" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;




