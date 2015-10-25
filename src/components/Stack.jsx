import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  getLists() {
    return this.props.lists || [];
  }

  render() {
    return (
      <div>
        <div>
          {
            this.getLists().map((data, index) => 
              <span class="list" key={index}>{data}</span>
            )
          }
        </div>
        <button onClick={() => this.props.push('Hello World!')}>
          Push
        </button>
        <button onClick={() => this.props.pop()}>
          Pop
        </button>
      </div>
    );
  }
}