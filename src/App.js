import logo from './logo.svg';
import './App.css';
import Homepage from './components/Home/Homepage';
import Navbar from './components/Navbar/Navbar';
import Sort from './components/Sort/Filter';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import Detail from './components/Detailpage/Detail';
import CreateProduct from './components/CreateProductpage/CreateProduct';
import Favorite from './components/Favourite/Favourite';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/detail/:id' element={<Detail></Detail>}></Route>
        <Route path='/favourite' element={<Favorite></Favorite>}></Route>
        <Route path='/createproduct' element={<CreateProduct></CreateProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
