import expect from 'expect';
import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions';

describe('count actions', () => {
  it('increment should create INCREMENT action', () => {
    expect(actions.increment()).toEqual({ type: types.INCREMENT });
  });

  it('decrement should create DECREMENT action', () => {
    expect(actions.decrement()).toEqual({ type: types.DECREMENT });
  });
});
