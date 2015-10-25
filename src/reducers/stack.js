import {Map, List} from 'immutable';

import * as types from '../constants/ActionTypes'

const initialState = Map({
  lists: List.of()
});

function setState(state, newState) {
  return state.merge(newState);
}

function push(state, text) {
  const currentLists = state.get('lists');
  const nextLists = currentLists.push(text);
  return state.set('lists', nextLists);
}

function pop(state) {
  const currentList = state.get('lists');
  const nextLists = currentList.pop();
  return state.set('lists', nextLists);
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_STATE:
      return setState(state, action.state);
    case types.PUSH:
      return push(state, action.text);
    case types.POP:
      return pop(state);
  }
  return state;
}