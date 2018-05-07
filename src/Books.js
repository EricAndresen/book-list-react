import React from 'react'

const Books = (props) => {
    const names = props.books.map( (book, i) => (
        <li 
            key = {i} 
            onClick = {() => console.log(`Go to ${book.title} focus`)} >
            {book.title}
        </li>
    ))

    return (
        <ul>
           {names}
        </ul>
    )
}

export default Books