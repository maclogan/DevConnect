import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

// Example of state for alerts: array of objects like below
// {
//     id: 1,
//     msg: 'Please log in',
//     alertType: 'success'
// }

// Actions will contain type and optional payload

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  // Evaluate which type the action is (Set in ../actions/types)
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
