// ProductDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [val, setVal] = useState(1);

  const incVal = () => {
    setVal(val + 1);
  };

  const decVal = () => {
    if (val >= 1) {
      setVal(val - 1);
    }
  };

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/admin/singleproduct/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetail();
  }, [id]);
 const total =product.price * val





  return (
    <div className="container mt-5 mb-5">
      <h1 className="pd-h mb-5 display-3 text-center">Product Detail</h1>
      <div className="row justify-content-center align-items-center g-5">
        <div className="col-md-6">
          {/* Product Image */}
          <img src={product.image} alt={product.name} className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-md-6">
          {/* Product Information */}
          <h2 className="pd-h">Product Name: {product.name}</h2>
          <h5 className="mb-3 pd-h">Description: {product.description}</h5>
          <p className="h4 text-warning pd-h">Rs: {product.price}</p>
          <div className="mt-3 mb-3">
            <button className="btn btn-outline-light me-1" onClick={decVal}>-</button>
            <button className="btn btn-outline-light me-1">Qua: {val}</button>
            <button className="btn btn-outline-light" onClick={incVal}>+</button>
          </div>
          <p className="h4 text-warning pd-h mt-2">Total: {total}</p>
          <div className="mt-3">
            <button className="btn btn-outline-warning btn-lg shadow-sm pd-h" >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
