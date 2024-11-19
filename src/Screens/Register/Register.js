import React, { useState } from 'react';
import './Register.css';
import img from '../../Asserts/register.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/user/register', {
        name, email, number, password
      });

      const data = response.data;

      if (response.status === 200) {
        alert(data.Message);
        setName('');
        setEmail('');
        setNumber('');
        setPassword('');
        navigate('/login')
      } else {
        alert(data.Message);
      }
    } catch (error) {
      
      if (error.response) {
        alert(error.response.data.Message );
      } 
      
    }

  };


  return (
    <>
      <div className="register-hero-img">
        <div className="register-hero-text">
          <h1>Register...!</h1>
        </div>
      </div>
      <div className="d-flex container r-container mt-5 mb-5 justify-content-center align-items-center">
        <div className="col px-5 mb-5">
          <img src={img} alt="Please register" style={{ height: '100%', width: "100%" }} />
        </div>

        <div className="col">
          <h1 className="register-h pb-3">Please Register Yourself</h1>
          <form className="contact-form" onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="number" className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="number"
                name="number"
                required
                placeholder="+92"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-warning">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
