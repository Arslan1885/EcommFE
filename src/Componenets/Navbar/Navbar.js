import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    const [addClass, setAddClass] = useState(null)
    const token = localStorage.getItem('jwt_token')
    const userId = localStorage.getItem('userId')
    const userRole = localStorage.getItem('userRole')
    const [isLogin, setIsLogin] = useState(!!token && !!userId && !!userRole)
    const navigate = useNavigate(); // To programmatically navigate

    const handleClass = (newClass) => {
        setAddClass(newClass)
    }

    const handleLogout = () => {
        localStorage.removeItem('jwt_token', 'userId', 'userRole')
        localStorage.removeItem('userId')
        localStorage.removeItem('userRole')
        setIsLogin(false)
        navigate('/login') 
    }
    const navbarForUser=()=>{
        return(
            <>
                <li className="nav-item">
                    <Link onClick={() => handleClass('home')} className={`nav-link ${addClass === 'home' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => handleClass('product')} className={`nav-link ${addClass === 'product' ? 'active' : ''}`} aria-current="page" to="/product">Product</Link>
                </li>
               
                <li className="nav-item">
                    <Link onClick={() => handleClass('about')} className={`nav-link ${addClass === 'about' ? 'active' : ''}`} to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => handleClass('contact')} className={`nav-link ${addClass === 'contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => handleClass('register')} className={`nav-link ${addClass === 'register' ? 'active' : ''}`} to="/register">Register</Link>
                </li>
                {isLogin ? (
                    <li className="nav-item">
                        <button onClick={handleLogout} className="nav-link btn btn-link">Logout</button>
                    </li>
                ) : (
                    <li className="nav-item">
                        <Link onClick={() => handleClass('login')} className={`nav-link ${addClass === 'login' ? 'active' : ''}`} to="/login">Login</Link>
                    </li>
                )}
            </>
        )
    }
    const navbarForAdmin = () => {
        return (
            <>
                <li className="nav-item">
                    <Link onClick={() => handleClass('adminHome')} className={`nav-link ${addClass === 'adminHome' ? 'active' : ''}`} aria-current="page" to="/admin/home">Admin Dashboard</Link>
                </li>
               
                <li className="nav-item">
                    <Link onClick={() => handleClass('Adminproduct')} className={`nav-link ${addClass === 'Adminproduct' ? 'active' : ''}`} to="/admin/product">Products</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => handleClass('adminContact')} className={`nav-link ${addClass === 'adminContact' ? 'active' : ''}`} to="/admin/contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => handleClass('allUser')} className={`nav-link ${addClass === 'allUser' ? 'active' : ''}`} to="/admin/user">Users</Link>
                </li>
                {/* <li className="nav-item">
                    <Link onClick={() => handleClass('register')} className={`nav-link ${addClass === 'register' ? 'active' : ''}`} to="/register">Register</Link>
                </li> */}
                {isLogin ? (
                    <li className="nav-item">
                        <button onClick={handleLogout} className="nav-link btn btn-link">Logout</button>
                    </li>
                ) : (
                    <li className="nav-item">
                        <Link onClick={() => handleClass('login')} className={`nav-link ${addClass === 'login' ? 'active' : ''}`} to="/login">Login</Link>
                    </li>
                )}
            </>
        )
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="#">BRAND .</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            {userRole==="admin"? navbarForAdmin():navbarForUser()}
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
