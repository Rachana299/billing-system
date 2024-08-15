import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function HomePage() {
  return (
    <div>
      <nav>
        <Link to="/menu">Menu</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/orders">Orders</Link>
      </nav>
    </div>
  );
}

export default HomePage;
