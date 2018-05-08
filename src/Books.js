import React from 'react';
import { connect } from 'react-redux';
import FabStatusChange from './FabStatusChange'

const Books = (props) => {
    const {books, status} = props;

    const filteredBooks = books.filter( book => book.status === status);

    const names = filteredBooks.map( (book, i) => (
        <div 
            key = {i}
            className = "Books-book">
            <img height = "200px" src = {book.imgUrl} />
            <h4>{book.title}</h4>
            <h5>{book.author}</h5>
            <FabStatusChange book = {book}/>
        </div>
    ))

    return (
        <div className = "Books-container">
           {names}
        </div>
    )
}

const mapToProps = (state) => ({books: state.books})
export default connect(mapToProps)(Books)