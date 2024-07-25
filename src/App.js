import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import CartPage from './components/CartPage';
import Checkout from './components/Checkout';
import Mypayment from './components/Mypayment';
import Productpage from './components/Productpage';
import Headerpage from './components/Header/Headerpage';
import Footerpage from './components/Footer/Footerpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headerpage />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productpage' element={<Productpage />} />
          <Route path='/cartPage' element={<CartPage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/mypayment' element={<Mypayment />} />
        </Routes>
        <Footerpage />
      </BrowserRouter>
    </div>
  );
}

export default App;

