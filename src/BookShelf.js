import React from 'react';
import Books from './Books';
import { connect } from 'react-redux';

const BookShelf = (props) => (
    <main>
      <h2>Currently Reading</h2>
      <Books books = {props.books.filter( book => (book.status === "currently-reading"))}/>
      <h2>Want to Read</h2>
      <Books books = {props.books.filter( book => (book.status === "want-to-read"))}/>
      <h2>Done Reading</h2>
      <Books books = {props.books.filter( book => (book.status === "done-reading"))}/>
    </main>
    )

const mapToProps = (state) => ({ books : state.books })
export default connect(mapToProps)(BookShelf)