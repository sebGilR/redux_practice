import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = (props) => {

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
              {console.log(book)}
              <Book  {...book} />
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

export default connect(mapStateToProps)(BooksList)
