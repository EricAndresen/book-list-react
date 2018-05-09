import React from 'react';
import { connect } from 'react-redux';
import FabStatusChange from './FabStatusChange'

const Books = (props) => {
    const {books, status, searchString} = props;

    let filteredBooks = []

    if (typeof status !== 'undefined' ){
        filteredBooks = books.filter( book => book.status === status);
    } 
    
    if (typeof searchString !== 'undefined') {
        filteredBooks = books.filter( book => (book.title.includes(searchString) || book.author.includes(searchString)));
    } else {
        console.log('no parameteres passed to Books component')
    }


    const bookList = filteredBooks.map( (book, i) => (
        <div 
            key = {i}
            className = "Books-book">
            <img height = "200px" src = {book.imgUrl} />
            <h4>{book.title}</h4>
            <h5>{book.author}</h5>
            <FabStatusChange book = {book}/>
            <p>{book.status}</p>
        </div>
    ))

    return (
        // If there is status, then layout is horizontal - proxy for bookshelf display (is there a better way?)
        <div className = { status ? "flex" : "grid"}>
           {bookList}
        </div>
    )
}

const mapToProps = (state) => ({books: state.books})
export default connect(mapToProps)(Books)