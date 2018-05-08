import React from 'react';
import {connect} from 'react-redux'

const FabStatusChange = (props) => {
    
    const updateBook = () => {
        props.dispatch({type: "UPDATE_BOOK"})
    }

    return ( 
    <button 
        className = "fab"
        onClick = {updateBook} >
        <i className="material-icons">keyboard_arrow_down</i>
    </button>
    )
}

export default connect()(FabStatusChange)