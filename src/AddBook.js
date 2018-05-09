import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
            <div></div>
        </div>
        )
    }
}

const mapStateToProps = (state => ({books: state.books}))

export default connect(mapStateToProps)(AddBook)
