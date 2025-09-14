import { createStore } from 'redux';

// The initial state for our counter
const initialState = {
  count: 0,
};

// The reducer function decides how to change the state based on an action
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(counterReducer);

export default store;