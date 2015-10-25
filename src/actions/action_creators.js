import * as types from '../constants/ActionTypes';

export function push(text) {
  return {
    type: types.PUSH,
    text
  };
}

export function pop() {
  return {
    type: types.POP
  };
}