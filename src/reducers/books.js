
const books = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return [
        ...state.slice(0, action.id - 1),
        ...state.slice(action.id, state.length)
      ];
    default:
      return state;
  }
}

export default books;
