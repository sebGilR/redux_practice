import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions'

const categories = [
  "Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"
];

const BooksForm = (props) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleChange = (e) => {
    switch (e.target.type) {

      case 'select-one':
        setCategory(e.target.value);
        break;
      case 'text':
        setTitle(e.target.value);
        break;
      default:
        return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, category };
    props.submitNewBook(book);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" onChange={handleChange} value={title} />
      </label>
      <label>
        Select a category:
        <select onChange={handleChange} value={category}>
          {
            categories.map(
              category => <option
                key={category}
                value={category}
              >
                {category}
              </option>
            )
          }
        </select>
      </label>
      <button type="submit">Save book</button>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  submitNewBook: (book) => {
    dispatch(createBook(book))
  }
});

export default connect(null, mapDispatchToProps)(BooksForm);
