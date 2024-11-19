import React, { useState } from 'react';
import './Login.css';
import img from '../../Asserts/register.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/user/login', {
        email,
        password,
      });

      const data = response.data;
      if (response.status === 200) {

        localStorage.setItem('jwt_token', data.jwt_token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('userRole', data.userRole);
        alert(data.Message);
        setEmail('');
        setPassword('');
        
        if (data.userRole === 'admin') {
          navigate('/admin/home');
          
        } else if (data.userRole === 'user') {
          
          navigate('/');
        }
        window.location.reload()



      } else {
        alert(data.Message);
      }

    } catch (error) {
      if (error.response) {
        alert(error.response.data.Message);
      }
    }
  };

  return (
    <>
      <div className="login-hero-img">
        <div className="login-hero-text">
          <h1>Login...!</h1>
        </div>
      </div>
      <div className="d-flex container l-container mt-5 mb-5 justify-content-center align-items-center">
        <div className="col px-5 mb-5">
          <img src={img} alt="Please register" style={{ height: '100%', width: "100%" }} />
        </div>

        <div className="col">
          <h1 className="login-h pb-3">Please Login.</h1>
          <form className="contact-form" onSubmit={handleLogin}>
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
              <label htmlFor="password" className="form-label">Password</label>
              <input
                className="form-control"
                id="password"
                name="password"
                required
                type="password"
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

export default Login;
