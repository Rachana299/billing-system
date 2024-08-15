import React, { useEffect, useState } from 'react';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the backend
    fetch('http://localhost:5000/orders')
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="orders-container">
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <span>Order ID: {order.id}</span> - <span>Customer: {order.customerName}</span> - <span>Total: ${order.total.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
