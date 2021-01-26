import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css'
import CurrentlyReading from './CurrentlyReading'
import WantedToRead from './WantToRead'
import Read from './Read'

class BookList extends Component{
  static propTypes = {
    bookChange: PropTypes.func.isRequired,
    currentBooks: PropTypes.array.isRequired,
    readBooks: PropTypes.array.isRequired,
    wantedBooks: PropTypes.array.isRequired,
    
 }

  render(){
    return(

      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading books= {this.props.currentBooks} bookChange={this.props.bookChange} />
          <WantedToRead books={this.props.wantedBooks} bookChange={this.props.bookChange} />
          <Read books={this.props.readBooks} bookChange={this.props.bookChange} />
        </div>
      </div>
      
    </div>
    )
  }
}

export default BookList