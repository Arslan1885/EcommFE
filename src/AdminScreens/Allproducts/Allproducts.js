import React, { useState, useRef } from 'react';
import axios from 'axios'; // Import axios
import './Products.css';

const Allproducts = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);

  // Create a ref for the file input
  const fileInputRef = useRef();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', productName);
    formData.append('description', productDescription);
    formData.append('price', productPrice);
    formData.append('image', productImage);

    try {
      const response = await axios.post('http://localhost:8080/admin/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = response.data;

      alert(data.Message || 'Product created successfully!'); // Changed the alert message to reflect product creation

      // Reset form fields
      setProductName('');
      setProductDescription('');
      setProductPrice('');
      setProductImage(null);
      fileInputRef.current.value = ''; // Clear the file input
    } catch (err) {
      alert(err.response?.data?.Message || 'An error occurred');
    }
  };

  return (
    <>
      <div className='cat-bg-img'>
        <div className='cat-hero-text'>
          <h1 className='cat-h'>
            All Products...!
          </h1>
        </div>
      </div>
      <div className='mt-5 mb-5 container'>
        <h2 className='cat-h text-center mb-4'>Add New Product</h2> 
        <form className='p-4 border rounded shadow' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='productName' className='form-label'>
              Product Name
            </label>
            <input
              type='text'
              className='form-control'
              id='productName'
              placeholder='Enter product name'
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='productDescription' className='form-label'>
              Product Description
            </label>
            <textarea
              className='form-control'
              id='productDescription'
              rows='3'
              placeholder='Enter product description'
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className='mb-3'>
            <label htmlFor='productPrice' className='form-label'>
              Product Price
            </label>
            <input
              type='number'
              className='form-control'
              id='productPrice'
              placeholder='Enter product price'
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='productImage' className='form-label'>
              Upload Image
            </label>
            <input
              type='file'
              className='form-control'
              id='productImage'
              name='image'
              ref={fileInputRef}
              onChange={(e) => setProductImage(e.target.files[0])}
              required
            />
          </div>


          <div className='text-center'>
            <button type='submit' className='btn btn-primary'>
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Allproducts;
