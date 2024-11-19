
import './Products.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/allproducts');
      console.log(response.data)
      setData(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <div className='product-hero-img'>
        <div className='product-hero-text'>
          <h1>Our Products...!</h1>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row g-3">
          {data.map((pro) => (
            <>
              <div className='col-md-4 col-lg-3 col-sm-12'>
                <div className="card bg-dark" >
                  <img src={pro.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{pro.name}</h5>
                    <p className="card-text">{pro.description}</p>
                    <Link to={`/productDetail/${pro._id}`} className="btn btn-warning">Check Products</Link>
                  </div>
                </div>
              </div>

            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products