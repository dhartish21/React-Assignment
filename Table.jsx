import React, { useState } from 'react';
import './Table.css';

const TableWithCRUD = () => {
  const initialData = [
    { id: 1, category: 'Electronics', name: 'Laptop', price: '$999' },
    { id: 2, category: 'Clothing', name: 'T-shirt', price: '$20' },
    { id: 3, category: 'Books', name: 'Novel', price: '$15' },
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const filteredData = data.filter((item) => {
    return (
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.price.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <table className="product-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button className="read-btn" onClick={() => console.log("Read:", item)}>Read</button>
                <button className="edit-btn" onClick={() => console.log("Edit:", item)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithCRUD;



