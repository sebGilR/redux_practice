let idGen = 3;

export const createBook = (book) => {
  return {
    type: 'CREATE_BOOK',
    book: {
      ...book,
      bookID: ++idGen
    }
  }
}

export const removeBook = (id) => {
  return {
    type: 'REMOVE_BOOK',
    id
  }
}
