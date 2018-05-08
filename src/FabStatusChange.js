import React from 'react';
import {connect} from 'react-redux'

const FabStatusChange = (props) => {
    const {book} = props;

    const updateBook = (status) => {
        return () => props.dispatch({type: "UPDATE_BOOK", index: book.index, status})
    }

    return ( 
    <button 
        className = "fab"
        onClick = {updateBook("done-reading")} >
        <i className="material-icons">keyboard_arrow_down</i>
    </button>
    )
}

export default connect()(FabStatusChange)