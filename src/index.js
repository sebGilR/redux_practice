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



// // Component
// const Counter = ({
//   value,
//   onIncrement,
//   onDecrement
// }) => (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={onIncrement} >+</button>
//       <button onClick={onDecrement} >-</button>
//     </div>
//   )


// // Reducer
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state
//   }
// }

// // Store
// const store = createStore(counter);

// const render = () => {
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onIncrement={() => {
//         store.dispatch({ type: 'INCREMENT' })
//       }}
//       onDecrement={() => {
//         store.dispatch({ type: 'DECREMENT' })
//       }}
//     />,
//     document.getElementById('root')
//   )
// }

// // Sub to actions dispatch
// store.subscribe(render);
// render();
