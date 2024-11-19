import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleContact = async (e) => {
    e.preventDefault()

    try {
      const createContact = await axios.post('http://localhost:8080/contact', {
        name, email, message
      })
      const data = createContact.data

      if (createContact.status === 200) {
        alert(data.Message)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        alert(data.Message)
      }
    } catch (error) {
      // Improved error handling
      if (error.response) {
        alert(error.createContact.data.Message || 'An error occurred. Please try again.')
      }
    }
  }

  return (
    <>
      <div className='contact-hero-img'>
        <div className='contact-hero-text'>
          <h1>Contact Us...!</h1>
        </div>
      </div>
      <div className='container mt-5 mb-5'>
        <div className="google-map">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824427177!2d2.2646335837289673!3d48.858938435486145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2s!4v1731618556766!5m2!1sen!2s"
            style={{ border: 0, height: '70vh', width: '100%' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-5">
          <form className="contact-form" onSubmit={handleContact}>
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
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                style={{ resize: 'none' }}
                className="form-control"
                id="message"
                name="message"
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-warning">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
