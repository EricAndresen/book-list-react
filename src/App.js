// TODO migrate to typescript instead of using proptypes (build time rather than run time checks, and a little nicer with functional reactive)
// OPTIMIZE remove font CDN for material icons for lighter weight app
// TODO can remove item from library
// TODO option is focused by status (make bool evaluation in onfocus attr)

// TODO On fab search click go to search page /search (react-router)
// TODO Can search books that are not in library

import React from 'react';
import Header from './Header';
import BookShelf from './BookShelf';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route } from 'react-router-dom';
import './App.css';

const initialState = {
  books : [
      {
        index: 0,
        title: "A farewell to Arms",
        author: "Ernest Hemingway",
        status: "currently-reading",
        imgUrl: "https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930"
      },
      {
        index: 1,
        title: "A short introduction to blood",
        author: "Ernest Hemingway",
        status: "want-to-read",
        imgUrl: "https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png"
      },
      {
        index: 2,
        title: "Titan",
        author: "Ernest Hemingway",
        status: "done-reading",
        imgUrl: "https://static1.squarespace.com/static/5202d1b3e4b099a0812c51a3/523753d6e4b030ffaec4a565/5a2043310d9297af42dde909/1512063793878/Dungeon-Lord.jpg"
      },
      {
        index: 3,
        title: "A farewell to Arms",
        author: "Ernest Hemingway",
        status: "currently-reading",
        imgUrl: "https://insiders.bookriot.com/wp-content/uploads/2017/07/They_Both_Die_at_the_End_cover.jpg",
      },
      {
        index: 4,
        title: "A short introduction to blood",
        author: "Ernest Hemingway",
        status: "want-to-read",
        imgUrl: "https://i.pinimg.com/736x/1c/52/59/1c5259ef6eb54ce4bfc2c1880fdaaa90.jpg"
      },
      {
        index: 5,
        title: "Titan",
        author: "Ernest Hemingway",
        status: "done-reading",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6FcQwPboXhx4lvX4RYM4i_y_MGYmV_QqCQPeuqCFXs_fAwC3Hw"
      },
      {
        index: 6,
        title: "A farewell to Arms",
        author: "Ernest Hemingway",
        status: "currently-reading",
        imgUrl: "http://www.designpointinc.com/wp-content/uploads/designpoint-book-cover-mom-im-gay.jpg"
      },
      {
        index: 7,
        title: "A short introduction to blood",
        author: "Ernest Hemingway",
        status: "want-to-read",
        imgUrl: "https://www.poetrysociety.org/psa/poetry/crossroads/on_poetry/covers/attachment/preview.jpg"
      },
      {
        index: 8,
        title: "Titan",
        author: "Ernest Hemingway",
        status: "done-reading",
        imgUrl: "http://wwwcdn.printmag.com/wp-content/uploads/1984-book-covers-2.jpg",
      },
    ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_BOOK":
      return {
        books: state.books.map( book => {
          if (book.index !== action.index) {
            return book
          } else {
            return {
              ...book,
              status: action.status
            }
          }
        })
      }
    default:
      return state;
  }
}

const store = createStore(reducer)

const AddBook = () => <div>Add a book!</div>

const App = () => (
    <Provider store = { store }>
      <div>
        <Header />
        <Route exact path="/" component = {BookShelf} />
        <Route exact path="/add" component = {AddBook} />
      </div>
    </Provider>
)

export default App;
