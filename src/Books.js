import React from 'react'

const FabStatusChange = (props) => (
    <button onClick = {() => console.log(props.book.title)} >Button</button>
)

const Books = (props) => {
    const names = props.books.map( (book, i) => (
        <li 
            key = {i}
            className = "Books-book">
            <img height = "200px" src = {book.imgUrl} />
            <h4>{book.title}</h4>
            <h5>{book.author}</h5>
            <FabStatusChange book = {book}/>
        </li>
    ))

    return (
        <ul>
           {names}
        </ul>
    )
}

export default Books