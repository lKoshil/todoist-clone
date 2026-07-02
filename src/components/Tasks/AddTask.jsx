import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';

const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, 'tasks'), {
        title,
        description,
        priority,
        completed: false,
        userId: currentUser.uid,
        createdAt: serverTimestamp(),
      });

      setTitle('');
      setDescription('');
      setPriority('medium');
      onTaskAdded();
    } catch (err) {
      console.error('Error adding task:', err);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <h3>Новая задача</h3>
      <input
        type="text"
        placeholder="Название задачи"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Низкий приоритет</option>
        <option value="medium">Средний приоритет</option>
        <option value="high">Высокий приоритет</option>
      </select>
      <button type="submit" disabled={loading}>
        {loading ? 'Добавление...' : 'Добавить задачу'}
      </button>
    </form>
  );
};

export default AddTask;