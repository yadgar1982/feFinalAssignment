import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { Navbar } from './pages/layout';
import { Home } from './pages/home/home';
import { Products } from './pages/products';
import {Review} from './pages/review';
import {Details} from "./pages/details";
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import {Footer} from "./pages/footer";
import "./index.css"



function App(){
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Products" element={<Products/>} />
      <Route path="/Review" element={<Review/>} />
      <Route path="/Details" element={<Details/>} />


    </Routes>
    
    </BrowserRouter>
      <footer><Footer/></footer>
    </>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
)