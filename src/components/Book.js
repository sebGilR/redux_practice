import React from 'react';

const Book = ({ bookID, title, category }) => (
  <>
    <td>{bookID}</td>
    <td>{title}</td>
    <td>{category}</td>
  </>
);

export default Book;
