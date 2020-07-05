import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = (props) => {

  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {
        props.books.map(book =>
          <tr>
            <Book key={book.bookID} {...book} />
          </tr>
        )
      }

    </table>
  )
};

const mapStateToProps = (state) => {
  const { books } = state;

  return {
    books: books
  }
}

export default connect(mapStateToProps)(BooksList)
