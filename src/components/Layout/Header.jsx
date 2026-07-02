import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Failed to log out:', err.message);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">📝 Todoist Clone</h1>
        <div className="user-info">
          <span>{currentUser?.email}</span>
          <button onClick={handleLogout} className="btn-logout">
            Выйти
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;