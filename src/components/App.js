import React from 'react';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BooksForm';

const App = () => {

  return (
    <div>
      <BookForm />
      <BooksList />

    </div>
  )
}

export default App;
