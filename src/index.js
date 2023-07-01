import ReactDOM from 'react-dom/client';
import React from 'react'
import './index.css';
import Navbar from './components/Navbar'
import HeaderSection from './components/HeaderSection';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <HeaderSection />
  </React.StrictMode>
);
