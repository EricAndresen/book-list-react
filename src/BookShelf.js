import React from 'react';
import Books from './Books';
import { connect } from 'react-redux';

const BookShelf = (props) => (
    <main>
      <h2>Currently Reading</h2>
      <Books status = "currently-reading" />
      <h2>Want to Read</h2>
      <Books status = "want-to-read"/>
      <h2>Done Reading</h2>
      <Books status = "done-reading"/>
    </main>
    )

export default BookShelf