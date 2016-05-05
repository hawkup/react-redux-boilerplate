import React, { PropTypes } from 'react';

const App = ({ children }) => (
  <div>
    <h1>React Redux Boilerplate</h1>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
