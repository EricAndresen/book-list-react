import React from 'react';
import Books from './Books';
import './BookShelf.css'

const FabSearch = () => (
  <button className = "fab-large primary lower-right"><i className="material-icons" >add</i></button>
);

const BookShelf = (props) => (
    <main>
      <h2>Currently Reading</h2>
      <Books status = "currently-reading" />
      <h2>Want to Read</h2>
      <Books status = "want-to-read"/>
      <h2>Done Reading</h2>
      <Books status = "done-reading"/>
      <FabSearch />
    </main>
    )

export default BookShelf