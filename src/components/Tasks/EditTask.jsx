import React, { useState, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const EditTask = ({ task, onClose, onTaskUpdated }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || '');
  const [priority, setPriority] = useState(task.priority);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const taskRef = doc(db, 'tasks', task.id);
      await updateDoc(taskRef, {
        title,
        description,
        priority,
      });
      onTaskUpdated();
      onClose();
    } catch (err) {
      console.error('Error updating task:', err);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-task-form">
      <h3>Редактировать задачу</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Низкий приоритет</option>
        <option value="medium">Средний приоритет</option>
        <option value="high">Высокий приоритет</option>
      </select>
      <div className="form-actions">
        <button type="submit" disabled={loading}>
          {loading ? 'Сохранение...' : 'Сохранить'}
        </button>
        <button type="button" onClick={onClose}>
          Отмена
        </button>
      </div>
    </form>
  );
};

export default EditTask;