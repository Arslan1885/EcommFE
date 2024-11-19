import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {

    const role = localStorage.getItem('userRole')
    const handleUser = () => {
        return (
            <>
                <li><Link className="link" to="/home">Home</Link></li>
                <li><Link className="link" to="/about">About</Link></li>
                <li><Link className="link" to="/contact">Contact</Link></li>
                <li><Link className="link" to="/register">Register</Link></li>
            </>
        )
    }
    const handleAdmin = () => {
        return (
            <>

                <li><Link className="link" to="/admin/home">Dashboard</Link></li>
                <li><Link className="link" to="/admin/category">All Categories</Link></li>
                <li><Link className="link" to="/admin/contact">All Contact</Link></li>
                <li><Link className="link" to="/admin/user">All user</Link></li>
            </>
        )
    }
    return (
        <footer className="bg-dark text-light pt-4 pb-4 footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-4">
                        <h5>BRAND</h5>
                        <p>Your brand's mission statement or a short description can go here.</p>
                    </div>


                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">

                            {role === 'admin' ? handleAdmin() : handleUser() }


                        </ul>
                    </div>


                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><Link className="link" to="https://www.facebook.com/" target='_blank'>Facebook</Link></li>
                            <li><Link className="link" to="https://www.twitter.com/" target='_blank'>Twitter</Link></li>
                            <li><Link className="link" to="https://www.instagram.com/" target='_blank'>Instagram</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-4">
                    <p>&copy; 2024 BRAND. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
