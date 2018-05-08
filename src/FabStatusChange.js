import React, {Component} from 'react';
import {connect} from 'react-redux'
import './FabStatusChange.css'


// use a class rather than functional component to store presentation state (e.g. showList)

class FabStatusChange extends Component {
    constructor(props) {
        super(props);
        this.book = this.props.book;
        this.state = {
            isHidden : true
        }
    }

    updateBook (status) {
        return () => this.props.dispatch({type: "UPDATE_BOOK", index: this.book.index, status})
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

    options = (<select 
        id = "status-menu" size = "3"
        // can replace this with short circuit operator
        onMouseOver = {() => this.showOptions()}
        onMouseLeave = {() => this.hideOptions()}>
        <option value ="done-reading">Done Reading</option>
        <option value ="want-to-read">Want to Read</option>
        <option value ="currently-reading">Currently Reading</option>
    </select>)

    render() {
        return ( 
            <div
                onMouseOver = {() => this.showOptions()}
                onMouseLeave = {() => this.hideOptions()}>
                <button 
                    className = "fab"
                    onClick = {this.updateBook("done-reading")} 
                    >
                    <i className="material-icons">keyboard_arrow_down</i>
                </button>
                {!this.state.isHidden && this.options}
            </div>
        )
    }
}

export default connect()(FabStatusChange)