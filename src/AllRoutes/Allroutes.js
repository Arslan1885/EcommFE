import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Screens/Home/Home.js';
import About from '../Screens/About/About.js';
import Contact from '../Screens/Contact/Contact.js';
import Register from '../Screens/Register/Register.js';
import Products from '../Screens/Products/Products.js';
import ProductDetailPage from '../Screens/ProductDetailPage/ProductDetailPage.js';
import OrderPage from '../Screens/OrderPage/OrderPage.js';
import Login from '../Screens/Login/Login.js';
import Dashboard from '../AdminScreens/Dashboard/Dashboard.js';
import AllContact from '../AdminScreens/Contact/AllContact.js';
import Users from '../AdminScreens/Users/Users.js';
import Allproducts from '../AdminScreens/Allproducts/Allproducts.js';
import Udetail from '../AdminScreens/Userdetail/Udetail.js';

const Allroutes = () => {
  const userRole = localStorage.getItem('userRole');

  const isAdmin = userRole === "admin";

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      <Route path='/product' element={<Products />} />
      <Route path='/productDetail/:id' element={<ProductDetailPage />} />
      <Route path='/order' element={<OrderPage />} />
      {isAdmin && (
        <>
          <Route path='/admin/home' element={<Dashboard />} />
          <Route path='/admin/contact' element={<AllContact />} />
          <Route path='/admin/user' element={<Users />} />
          <Route path='/admin/product' element={<Allproducts />} />
          <Route path='/admin/udetail/:id' element={<Udetail/>}/>
        </>
      )}
    </Routes>
  );
};

export default Allroutes;
