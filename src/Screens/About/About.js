import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div className='about-hero-img'>
        <div className='about-hero-text'>
          <h1>About Us...!</h1>
        </div>
      </div>
      <div className='container mt-5 mb-5'>
        <h1  className='about-h1'>About Us</h1>
        <p> Welcome to [Your Brand Name]—your ultimate destination for quality products, unbeatable prices, and exceptional customer service. We are dedicated to creating a seamless shopping experience, from browsing through our extensive catalog to completing your purchase securely and receiving your order promptly.
        </p>
        <h3 className='about-h1'>Our Mission</h3>
        <p>At [Your Brand Name], our mission is to make top-quality products accessible and affordable. We carefully select each product and partner only with trusted suppliers, ensuring that our customers receive the very best, every time.</p>

        <h3 className='about-h1'>
          Why Shop With Us?
        </h3>
        <p>
          Quality Products: We focus on quality assurance, so every product meets our high standards.
          Customer-Centric Service: From real-time support to easy returns, we put your needs first.
          Exclusive Deals: Discover promotions and discounts on top products, helping you save without compromising on quality.
        </p>
       <h3 className='about-h1'>
          Our Values
       </h3>
        <p>
          Integrity: We believe in honest pricing and transparent policies.
          Innovation: We constantly seek new ways to improve our offerings and enhance the shopping experience.
          Commitment to Customers: We are here to support you through every step of your shopping journey.
        </p>
        <h1 className='about-h1'>
          Thank You for Choosing Us
        </h1>
        <p>
          We’re thrilled to have you as part of our community and can’t wait to be a part of your shopping journey. Whether you're a first-time visitor or a loyal customer, we’re here to make your experience as enjoyable as possible.
        </p>

      </div>
    </>
  )
}

export default About