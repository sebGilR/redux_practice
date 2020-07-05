import React from 'react';

const categories = [
  "Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"
];

const BooksForm = () => {

  return (
    <form>
      <label>
        Title:
        <input type="text" />
      </label>
      <label>
        Select a category:
        <select>
          {
            categories.map(category => <option value={category.toLowerCase()}>{category}</option>)
          }
        </select>
      </label>
      <button type="submit">Save book</button>
    </form>
  )
}

export default BooksForm;
