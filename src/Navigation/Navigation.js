import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contact</Link>
            </li>
            <li>
              <Link to="/todolist">ToDoList</Link>
            </li>
          </ul>
        </nav>
      
  );
}

export default Navigation;
