import React, {Component} from 'react';
import {connect} from 'react-redux'
import './FabStatusChange.css'


// class rather than functional component to store presentation state (e.g. showList)

class FabStatusChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden : true
        }
    }

    updateBook (status) {
        return this.props.alterBook(this.props.book.index, status)
        // console.log(typeof this.props.alterBook)
    }

    showOptions() {
        this.setState({
            isHidden: false
        })
    }

    hideOptions() {
        this.setState({
            isHidden : true
        })
    }

    options = (
        <select 
                className = "status-menu" 
                size = "4"
                onClick = {(e) => this.updateBook(e.target.value)}
                defaultValue = {this.props.book.status}
                >
            <option 
                value ="done-reading">Done Reading</option>
            <option 
                value ="want-to-read">Want to Read</option>
            <option 
                value ="currently-reading">Currently Reading</option>
            <option 
                value ="none">Archive</option>
        </select>
    )

    render() {
        return ( 
            <div
                onMouseOver = {() => this.showOptions()}
                onMouseLeave = {() => this.hideOptions()}>
                <button 
                    className = "fab" 
                    >
                    <i className="material-icons">filter_list</i>
                </button>
                {!this.state.isHidden && this.options}
            </div>
        )
    }
}

export default FabStatusChange