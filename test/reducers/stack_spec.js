import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import stackReducer from '../../src/reducers/stack';

describe('stack reducer', () => {
  it('handles SET_STATE', () => {
    const intitialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        lists: List.of('Hello World')
      })
    };
    const nextState = stackReducer(intitialState, action);

    expect(nextState).to.equal(fromJS({
      lists: ['Hello World']
    }));
  });

  it('handles SET_STATE with plain JS payload', () => {
    const intitialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        lists: ['Hello World']
      }
    };
    const nextState = stackReducer(intitialState, action);

    expect(nextState).to.equal(fromJS({
      lists: ['Hello World']
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: Map({
        lists: List.of('Hello World')
      })
    };
    const nextState = stackReducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      lists: ['Hello World']
    }));
  })

  it('handles PUSH', () => {
    const intitialState = Map({
      lists: List.of('Hello World')
    });
    const action = {
      type: 'PUSH',
      text: 'Hello World'
    };
    const nextState = stackReducer(intitialState, action);
    expect(nextState).to.equal(fromJS({
      lists: ['Hello World', 'Hello World']
    }));
  });

  it('handles PUSH without intitialState', () => {
    const action = {
      type: 'PUSH',
      text: 'Hello World'
    };
    const nextState = stackReducer(undefined, action);
    expect(nextState).to.equal(fromJS({
      lists: ['Hello World']
    }));
  });

  it('handles POP', () => {
    const intitialState = Map({
      lists: List.of('Hello World')
    });
    const action = {
      type: 'POP'
    };
    const nextState = stackReducer(intitialState, action);
    expect(nextState).to.equal(fromJS({
      lists: []
    }));
  });

  it('handles POP without intitialState', () => {
    const action = {
      type: 'POP'
    };
    const nextState = stackReducer(undefined, action);
    expect(nextState).to.equal(fromJS({
      lists: []
    }));
  })
});