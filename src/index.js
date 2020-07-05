import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers'

import { Provider } from 'react-redux';

let idGen = 0;

const initialState = [
  { bookID: ++idGen, title: "Crazy book", category: "Action" },
  { bookID: ++idGen, title: "Crazy History", category: "History" },
  { bookID: ++idGen, title: "Crazy book", category: "Action" }
]

const store = createStore(rootReducer, { books: initialState });

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
