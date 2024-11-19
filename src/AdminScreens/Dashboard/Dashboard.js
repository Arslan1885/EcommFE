import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div className='admin-bg-img'>
        <div className='admin-hero-text'>
          <h1 className='admin-h'>
            Welcome to admin Dashboard...!
          </h1>
        </div>
      </div>
      <div className='container mt-5 mb-5 justify-content-center align-items-center text-center'>
        <h1 className='admin-h'>
          Welcome to Brand...!
        </h1>
        <p>Discover a world of possibilities with us. Whether you're here to explore our products, learn about our services, or connect with us, we're delighted to have you.At [Your Website Name], we believe in delivering excellence. Our mission is to provide you with the best experience, from seamless navigation to exceptional support.
        </p>
        <div className='mt-5 mb-5'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-md-5 bg-dark p-5 border-5 m-3'>
              <h4 className='admin-h'>Check Our Categories</h4>
              <p>Dive into a diverse range of categories designed to cater to your every need. From top-notch products to exclusive deals, we've got something for everyone.Discover, select, and indulge in the best we have to offer—tailored just for you!</p>
              <Link to='' className='btn btn-outline-warning'>Please Check</Link>
            </div>
            <div className='col-md-5 bg-dark p-5 border-5 m-3'>
              <h4 className='admin-h'>Check Our Products</h4>
              <p>Dive into a diverse range of categories designed to cater to your every need. From top-notch products to exclusive deals, we've got something for everyone.Discover, select, and indulge in the best we have to offer—tailored just for you!</p>
              <Link to='/admin/product' className='btn btn-outline-warning'>Please Check</Link>
            </div>
            <div className='col-md-5  bg-dark p-5 border-5 m-3'>
              <h4 className='admin-h'>Check Our Users</h4>
              <p>Dive into a diverse range of categories designed to cater to your every need. From top-notch products to exclusive deals, we've got something for everyone.Discover, select, and indulge in the best we have to offer—tailored just for you!</p>
              <Link to='/admin/user' className='btn btn-outline-warning'>Please Check</Link>
            </div>
            <div className='col-md-5 bg-dark p-5 border-5 m-3'>
              <h4  className='admin-h'>Check Our Contact</h4>
              <p>Dive into a diverse range of categories designed to cater to your every need. From top-notch products to exclusive deals, we've got something for everyone.Discover, select, and indulge in the best we have to offer—tailored just for you!</p>
              <Link to='/admin/contact' className='btn btn-outline-warning'>Please Check</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard