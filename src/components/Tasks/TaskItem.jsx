import React, { useState } from 'react';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import EditTask from './EditTask';

const TaskItem = ({ task, onTaskUpdated, onTaskDeleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const toggleComplete = async () => {
    const taskRef = doc(db, 'tasks', task.id);
    await updateDoc(taskRef, {
      completed: !task.completed,
    });
    onTaskUpdated();
  };

  const handleDelete = async () => {
    if (window.confirm('Удалить задачу?')) {
      setIsDeleting(true);
      const taskRef = doc(db, 'tasks', task.id);
      await deleteDoc(taskRef);
      onTaskDeleted();
      setIsDeleting(false);
    }
  };

  if (isEditing) {
    return (
      <EditTask
        task={task}
        onClose={() => setIsEditing(false)}
        onTaskUpdated={onTaskUpdated}
      />
    );
  }

  const priorityColors = {
    low: '#4CAF50',
    medium: '#FF9800',
    high: '#f44336',
  };

  return (
    <div
      className={`task-item ${task.completed ? 'completed' : ''}`}
      style={{ borderLeft: `4px solid ${priorityColors[task.priority]}` }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />
      <div className="task-content">
        <h4>{task.title}</h4>
        {task.description && <p>{task.description}</p>}
        <small>Приоритет: {task.priority}</small>
      </div>
      <div className="task-actions">
        <button onClick={() => setIsEditing(true)}>✏️</button>
        <button onClick={handleDelete} disabled={isDeleting}>
          🗑
        </button>
      </div>
    </div>
  );
};

export default TaskItem;