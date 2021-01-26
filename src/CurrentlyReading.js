import React,{ Component} from 'react';
import PropTypes from 'prop-types';

class CurrentlyReading extends Component{

  static propTypes = {
    books: PropTypes.array.isRequired,
     bookChange: PropTypes.func.isRequired
  }
  
    render(){
      
        return(
      <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map((book) => 
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                     <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail}})`}}></div>
                      <div className="book-shelf-changer">
                        <select >
                          <option>Move to...</option>
                          <option value="currentlyReading" onClick={this.props.bookChange} >Currently Reading</option>
                          <option value="wantToRead" onClick={this.props.bookChange}>Want to Read</option>
                          <option value="read" onClick={this.props.bookChange}>Read</option>
                          <option value="none" onClick={this.props.bookChange}>None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{ book.title }</div>
                    <div className="book-authors">{ book.authors}</div>
                  </div>
                </li>)}
              </ol>
            </div>
          </div>
        );
    }

}

export default CurrentlyReading;