import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Navigation = () => {
  const { user } = useAuth();
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  if (!isMainPage) return null;

  return (
    <div className="fixed top-4 right-4 flex gap-4">
      {user ? (
        <div className="text-sm text-gray-600">
          Logged in as: {user.email}
        </div>
      ) : (
        <div className="flex gap-4">
          <Link 
            to="/login" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;