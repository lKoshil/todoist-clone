import React from 'react';
import Header from '../components/Layout/Header';
import TaskList from '../components/Tasks/TaskList';

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Header />
      <main className="main-content">
        <TaskList />
      </main>
    </div>
  );
};

export default DashboardPage;