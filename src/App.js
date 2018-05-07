// TODO migrate to typescript instead of using proptypes (build time rather than run time checks, and a little nicer with functional reactive)

import React, { Component } from 'react';
import Header from './Header';
import Books from './Books';
import './App.css';

const books = [
      {title: "A farewell to Arms"},
      {title: "A short introduction to blood"},
      {title: "Titan"}
  ]

const BookShelf = () => (
  <main>
    <h2>Currently Reading</h2>
    {/* This filter will become by book.status */}
    <Books books = {books.filter( book => (book.title === "Titan"))}/>
    <h2>Want to Read</h2>
    <Books books = {books.filter( book => (book.title === "A farewell to Arms"))}/>
    <h2>Done Reading</h2>
    <Books books = {books.filter( book => (book.title === "Titan"))}/>
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
