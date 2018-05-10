import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Books from './Books'

class AddBook extends Component {
    constructor() {
        super()
        this.state = {
            searchString: '',
        }
    }

    render() {
        return (
        <div>
            <div className = "AddBook-search-bar">
                <Link to = "/">
                    <i className ="material-icons grey icon-large">arrow_back</i>
                </Link>
                <i className ="material-icons grey icon-large">search</i>
                <input 
                    className = "AddBook-input"
                    placeholder = "Type to See Available Books"
                    type="text"
                    value = {this.state.searchString}
                    onChange = {event => {
                        this.setState({searchString: event.target.value})}
                    }>
                </input>
            </div>
            <Books searchString = {this.state.searchString}/>
        </div>
        )
    }
}


export default AddBook
