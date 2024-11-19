import React, { useEffect, useState } from 'react';
import './Users.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/alluser'); // Added await
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      alert('Error fetching users:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/admin/delete/${id}`)
      const data = response.data
      if (response.status === 200) {
        alert(data.Message)
        fetchUsers();

      }

    } catch (error) {
      alert(error)

    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="user-bg-img">
        <div className="user-hero-text">
          <h1 className="user-h">All Users...!</h1>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4 user-h mb-5">User List</h2>
        <table className="table table-bordered text-center text-white">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td> {/* Serial number */}
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td> {/* Assuming phoneNumber is part of the API response */}
                  <td>
                    <Link to={`/admin/udetail/${user._id}`} className="btn btn-warning btn-sm me-2" >Edit</Link>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
