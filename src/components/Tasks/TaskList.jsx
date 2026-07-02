import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import TaskItem from './TaskItem';
import AddTask from './AddTask';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  const fetchTasks = () => {
    const q = query(
      collection(db, 'tasks'),
      where('userId', '==', currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const tasksData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksData);
      setLoading(false);
    });

    return unsubscribe;
  };

  useEffect(() => {
    let unsubscribe;

    if (currentUser) {
      unsubscribe = fetchTasks();
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [currentUser]);

  const handleTaskAdded = () => {
    // Tasks will auto-update via onSnapshot
  };

  const handleTaskUpdated = () => {
    // Tasks will auto-update via onSnapshot
  };

  const handleTaskDeleted = () => {
    // Tasks will auto-update via onSnapshot
  };

  if (loading) {
    return <div className="loading">Загрузка задач...</div>;
  }

  return (
    <div className="task-list-container">
      <AddTask onTaskAdded={handleTaskAdded} />
      <div className="tasks">
        <h3>Мои задачи ({tasks.length})</h3>
        {tasks.length === 0 ? (
          <p>Нет задач. Добавьте первую!</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onTaskUpdated={handleTaskUpdated}
              onTaskDeleted={handleTaskDeleted}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;