// TODO migrate to typescript instead of using proptypes (build time rather than run time checks, and a little nicer with functional reactive components)

import React, { Component } from 'react';
import Header from './Header';
import Books from './Books';
import './App.css';

const books = [
      {name: "A farewell to Arms"},
      {name: "A short introduction to blood"},
      {name: "Titan"}
  ]

const BookShelf = () => (
  <main>
    <h2>Currently Reading</h2>
    {/* This filter will become by book.status */}
    <Books books = {books.filter( book => (book.name === "Titan"))}/>
    <h2>Want to Read</h2>
    <Books books = {books.filter( book => (book.name === "A farewell to Arms"))}/>
    <h2>Done Reading</h2>
    <Books books = {books.filter( book => (book.name === "Titan"))}/>
  </main>
)

const App = () => {
  
  return(
  <div>
    <Header />
    <BookShelf />
  </div>
)}

export default App;
