import React, { useState } from 'react';

const categories = [
  "Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"
];

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

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

  return (
    <form>
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
                value={category.toLowerCase()}
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

export default BooksForm;
