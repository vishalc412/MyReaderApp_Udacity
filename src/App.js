import React,{ Component} from 'react';
import './App.css'
import * as BooksAPI from './BooksAPI';
import BookSearch from './BookSearch';
import BookList from './BookList';
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

class BooksApp extends Component {
  state = {
    books:[],
    currentBooks:[],
    readBooks: [],
    wantedBooks: [],
    showSearchPage: false
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        currentBooks: books.filter(x=>x.shelf==='currentlyReading'),
        wantedBooks: books.filter(x=>x.shelf==='wantToRead'),
        readBooks: books.filter(x=>x.shelf==='read'),
      })
    })
  }

  

  bookChange(book,shelf){
    console.log("inside read boook change "+shelf)
    BooksAPI.update(book,shelf)
    BooksAPI.getAll().then((books) => {
      this.setState({
        currentBooks: books.filter(x=>x.shelf==='currentlyReading'),
        wantedBooks: books.filter(x=>x.shelf==='wantToRead'),
        readBooks: books.filter(x=>x.shelf==='read'),
      })
    })


  //   if(shelf==='currentlyReading'){
  //     console.log("entered book shel currently reafding")
  //   this.setState({
  //   //  currentBooks: this.state.currentBooks.concat([book])
  //    currentBooks:[...this.state.currentBooks,book]
  //   })
  // }
  // if(book.shelf==='wantToRead'){
  //   this.setState({
  //     wantedBooks: [...this.state.wantedBooks,book]
  //   })
  // }
  // if(book.shelf==='read'){
  //   this.setState(()=>({
  //     readBooks : [...this.state.readBooks,book]
  //   }))
  // }
  }


  render() {
    return (
      <div>
        {
          <div>
            <Route exact path='/search' render={() => (
          <div className="search-books">
            {
            <BookSearch books={this.state.books} bookChange={this.bookChange}/>
            }
            
          </div>
      )}/>
              <Route exact path='/' render={() => (
          <div className="app">
          <BookList currentBooks = {this.state.currentBooks} readBooks={this.state.readBooks} wantedBooks={this.state.wantedBooks} readBooks= {this.state.readBooks} bookChange ={this.bookChange} />
          <div className="open-search">
          <Link to="/search" className="search-books">
            Add Books
          </Link>
          </div>
          </div>
              )}/>
          </div>
        }

      </div>
    )
  }
}

export default BooksApp;