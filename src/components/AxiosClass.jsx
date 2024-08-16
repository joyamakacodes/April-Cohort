import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosClass = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  const login = {
    name: name,
    password: password
  };

  const URL = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(URL);
        setUsers(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL, login);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      setUsers(users.filter(user => user.id !== id));  
    } catch (e) {
      console.log(e);
    }
  };
  

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Phone</th>
            <th>City</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.address.city}</td>
              <td>{user.website}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <br />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AxiosClass;
