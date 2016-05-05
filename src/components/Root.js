import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import Counter from '../containers/Counter';

let hmrKey = Math.random();

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router key={hmrKey} history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Counter} />
      </Route>
    </Router>
  </Provider>
);

if (module.hot) {
  hmrKey = Math.random();
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Root;
