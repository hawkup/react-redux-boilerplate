import React, { PropTypes } from 'react';

const Count = ({ count, increment, decrement }) => (
  <div>
    <span>Clicked: {count} times</span>
    <button onClick={() => increment()}>
      +
    </button>
    <button onClick={() => decrement()}>
      -
    </button>
  </div>
);

Count.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default Count;
