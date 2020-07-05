import React from 'react';

const Book = (book) => {
  const { bookID, title, category, removeBook } = book
  const handleRemove = (book) => {
    removeBook(book)
  }
  return (
    <>
      <td>{bookID}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button onClick={() => handleRemove(book)}>
          Remove Book
        </button>
      </td>
    </>
  )
};

export default Book;
