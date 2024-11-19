import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllContact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allcontact');
        console.log(response.data)
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchContacts();
  }, []);

  return (

    
    <>
      <div className="user-bg-img">
        <div className="user-hero-text">
          <h1 className="user-h">All Contacts...!</h1>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
          All Contact Messages
        </h2>


        <table className="table text-white table-bordered text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {
              contacts.map((contact, index) => (
                <tr key={contact._id}>
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                </tr>


              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllContact;
