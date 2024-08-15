import React, { useEffect, useState } from 'react';
import './menu.css';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu items from the backend
    fetch('http://localhost:5000/menu')
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error('Error fetching menu items:', error));
  }, []);

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span> - <span>${item.price.toFixed(2)}</span>
            <span> (Available: {item.quantity})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
