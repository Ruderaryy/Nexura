import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import HomePage from './main_page/home/HomePage';
import SignUp from './main_page/signup/SignUp';
import AboutPage from './main_page/about/AboutPage';
import ProductPage from './main_page/products/ProductsPage';
import PricingPage from './main_page/pricing/PricingPage';
import SupportPage from './main_page/support/SupportPage';
import Navbar from './main_page/Navbar';
import Footer from './main_page/Footer';
import NotFound from './main_page/NotFound';
import Login from './main_page/login/Login';

import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='pricing' element={<PricingPage />} />
      <Route path='support' element={<SupportPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} />
  </BrowserRouter>
);
