import React from 'react';
import Books from './Books';
import { Link } from 'react-router-dom';
import './BookShelf.css';

const FabSearch = () => (
  <Link to="/add">
    <button className = "fab-large primary lower-right">
        <i className="material-icons" >
          add
        </i>
    </button>
  </Link>
);

const BookShelf = (props) => (
    <div>
      <h2>Currently Reading</h2>
      <Books status = "currently-reading" />
      <h2>Want to Read</h2>
      <Books status = "want-to-read"/>
      <h2>Done Reading</h2>
      <Books status = "done-reading"/>
      <FabSearch />
    </div>
    )

export default BookShelf