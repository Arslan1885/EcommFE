import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Udetail = () => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/admin/user/${id}`)
        const { name, email, number } = response.data
        setName(name)
        setEmail(email)
        setNumber(number)
        // setPassword(password)

      } catch (error) {
        alert(error)

      }
    }
    fetchuser()

  }, [id])

  const handleUpdate=async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.put(`http://localhost:8080/admin/edit/${id}`,{
        name , email , number , password
      })
      if (response.status===200) {
         alert(response.data.Message)
         setName('')
         setEmail('')
         setNumber('')
         setPassword('')
        
      }
      
    } catch (error) {
      alert(error)
      
    }

  }


  return (
    <>
      <div className="user-bg-img">
        <div className="user-hero-text">
          <h1 className="user-h">Users Detail...!</h1>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <h2 className='user-h mb-4'>Update User Details</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="number" className="form-label">Number</label>
            <input
              type="text"
              className="form-control"
              id="number"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-outline-warning">Update</button>
        </form>
      </div>
    </>
  )
}

export default Udetail
