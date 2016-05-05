import expect from 'expect';
import count from '../../reducers/count';
import * as types from '../../constants/ActionTypes';

describe('count reducer', () => {
  it('should handle INCREMENT', () => {
    expect(
      count(0, { type: types.INCREMENT })
    ).toEqual(1);
  });

  it('should handle DECREMENT', () => {
    expect(
      count(0, { type: types.DECREMENT })
    ).toEqual(-1);
  });
});
