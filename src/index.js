import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterComponent from './router';
import { BrowserRouter } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <RouterComponent/>
    
  </BrowserRouter>
);


