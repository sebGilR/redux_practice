import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = (props) => {

  const handleRemoveBook = (book) => {
    props.removeBook(book);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {
          props.books.map(book =>
            <tr key={book.bookID}>
              <Book  {...book} removeBook={handleRemoveBook} />
            </tr>
          )
        }
      </tbody>
    </table>
  )
};

const mapStateToProps = (state) => {
  const { books } = state;

  return {
    books: books
  }
}

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
