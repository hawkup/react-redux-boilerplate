import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';

import {createStore, renderDevTools} from './utils/devTools';

import reducer from './reducers/stack';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    lists: ['Hello World']
  }
});

ReactDOM.render(
  <div>
    <Provider store={store}>
        <App />
    </Provider>
    {renderDevTools(store)}
  </div>,
  document.getElementById('app')
);