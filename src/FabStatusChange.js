import React, {Component} from 'react';
import {connect} from 'react-redux'
import './FabStatusChange.css'


// use a class rather than functional component to store presentation state (e.g. showList)

class FabStatusChange extends Component {
    constructor(props) {
        super(props);
        this.book = this.props.book;
        this.showList = false;
    }

    updateBook (status) {
        return () => this.props.dispatch({type: "UPDATE_BOOK", index: this.book.index, status})
    }

    render() {
        return ( 
            <div>
                <button 
                    className = "fab"
                    onClick = {this.updateBook("done-reading")} >
                    <i className="material-icons">keyboard_arrow_down</i>
                </button>
                <select 
                    id = "status-menu" size = "3"
                    className = {this.showList ? "show" : "hide"}>
                    <option value ="done-reading">Done Reading</option>
                    <option value ="want-to-read">Want to Read</option>
                    <option value ="currently-reading">Currently Reading</option>
                </select>
            </div>
        )
    }
}

export default connect()(FabStatusChange)