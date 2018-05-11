import React from 'react';
import { connect } from 'react-redux';
import FabStatusChange from './FabStatusChange'

const Books = (props) => {
    const {state, status, searchString} = props;

    let filteredBooks = []

    // check string contains more than one search term
    const containsAll = (targetList, stringToCheck, index = targetList.length) => {
        let containsEach = true;

        if (index <= 0) {
            return containsEach
        } else {
            index = index - 1;
            containsEach = stringToCheck.includes(targetList[index]) && containsAll(targetList, stringToCheck, index);
            return containsEach
        }
    }

    if (typeof status !== 'undefined' ){
        filteredBooks = state.books.filter( book => book.status === status);
    } 
    
    if (searchString) {
        const searchStringList = searchString.trim().split(' ');
        filteredBooks = state.books.filter( book => (containsAll(searchStringList, book.title) || containsAll(searchStringList, book.author)))
    }


    const bookList = filteredBooks.map( (book, i) => (
        <div 
            key = {i}
            className = "Books-book">
            <img alt = {`cover for ${book.title}`} height = "200px" src = {book.imgUrl} />
            <h4>{book.title}</h4>
            <h5>{book.author}</h5>
            <FabStatusChange alterBook = {props.alterBook} book = {book} state = {state}/> 
        </div>
    ))

    return (
        // If there is status, then layout is horizontal - proxy for bookshelf display (is there a better way? - just have a prop for type?)
        <div className = { status ? "flex" : "grid"}>
           {bookList}
        </div>
    )
}

export default Books