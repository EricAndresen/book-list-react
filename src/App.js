// TODO migrate to typescript instead of using proptypes (build time rather than run time checks, and a little nicer with functional reactive)

import React, { Component } from 'react';
import Header from './Header';
import Books from './Books';
import './App.css';

const books = [
      {
        title: "A farewell to Arms",
        author: "Ernest Hemingway",
        status: "currently-reading",
        imgUrl: "https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930"
      },
      {
        title: "A short introduction to blood",
        author: "Ernest Hemingway",
        status: "want-to-read",
        imgUrl: "https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png"
      },
      {
        title: "Titan",
        author: "Ernest Hemingway",
        status: "done-reading",
        imgUrl: "https://static1.squarespace.com/static/5202d1b3e4b099a0812c51a3/523753d6e4b030ffaec4a565/5a2043310d9297af42dde909/1512063793878/Dungeon-Lord.jpg"
      }
  ]

const BookShelf = () => (
  <main>
    <h2>Currently Reading</h2>
    {/* This filter will become by book.status */}
    <Books books = {books.filter( book => (book.status === "currently-reading"))}/>
    <h2>Want to Read</h2>
    <Books books = {books.filter( book => (book.status === "want-to-read"))}/>
    <h2>Done Reading</h2>
    <Books books = {books.filter( book => (book.status === "done-reading"))}/>
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
