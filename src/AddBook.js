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
            <input 
                type="text"
                value = {this.state.searchString}
                onChange = {event => {
                    this.setState({searchString: event.target.value})}
                }>
            </input>
            <Books searchString = {this.state.searchString}/>
        </div>
        )
    }
}


export default AddBook
