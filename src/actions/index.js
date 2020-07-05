let idGen = 3;

export const createBook = (book) => {
  return {
    type: 'CREATE_BOOK',
    payload: {
      ...book,
      id: ++idGen
    }
  }
}

export const removeBook = (id) => {
  return {
    type: 'REMOVE_BOOK',
    id
  }
}
