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
        return this.props.dispatch({type: "UPDATE_BOOK", index: this.props.book.index, status})
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
                >
            <option 
                selected = {this.props.book.status === "done-reading"} 
                value ="done-reading">Done Reading</option>
            <option 
                selected = {this.props.book.status === "want-to-read"} 
                value ="want-to-read">Want to Read</option>
            <option 
                selected = {this.props.book.status === "currently-reading"} 
                value ="currently-reading">Currently Reading</option>
            <option 
                selected = {this.props.book.status === "none"} 
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

export default connect()(FabStatusChange)