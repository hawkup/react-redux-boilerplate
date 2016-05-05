import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import Count from '../components/Count';

const mapStateToProps = (state) => ({
  count: state.count,
});

const Counter = connect(
  mapStateToProps,
  { increment, decrement }
)(Count);

export default Counter;
