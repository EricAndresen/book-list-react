import React, { Component } from 'react';
import Header from './Header';
import Books from './Books';
import './App.css';

const books = [
      {name: "A farewell to Arms"},
      {name: "A short introduction to blood"},
      {name: "Titan"}
  ]

const App = () => {
  
  return(
  <div>
    <Header />
    <Books books = {books}/>
  </div>
)}

export default App;
