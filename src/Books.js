import React from 'react'

const FabStatusChange = (props) => (
    <button 
        className = "fab"
        onClick = {() => console.log(props.book.title)} >
        <i className="material-icons">keyboard_arrow_down</i>
    </button>
)

const Books = (props) => {
    const names = props.books.map( (book, i) => (
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

export default Books