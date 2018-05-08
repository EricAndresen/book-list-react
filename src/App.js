// TODO migrate to typescript instead of using proptypes (build time rather than run time checks, and a little nicer with functional reactive)
// TODO add drop down menu
// TODO add redux

// OPTIMIZE remove font CDN for material icons for lighter weight app

import React, { Component } from 'react';
import Header from './Header';
import BookShelf from './BookShelf';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';

const initialState = {
  books : [
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
      },
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
      },
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
      },
    ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer)


const App = () => {
  
  return(
  <Provider store = { store }>
    <div>
      <Header />
      <BookShelf />
    </div>
  </Provider>
)}

export default App;
