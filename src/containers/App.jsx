import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/action_creators';
import Stack from '../components/Stack';

class App extends React.Component {
  render() {
    return (
      <div>
        <Stack {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.get('lists')
  };
}

export default connect(mapStateToProps, actionCreators)(App);