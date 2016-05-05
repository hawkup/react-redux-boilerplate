import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Count from '../../components/Count';

function setup(count = 0) {
  const actions = {
    increment: expect.createSpy(),
    decrement: expect.createSpy(),
  };

  const component = shallow(
    <Count count={count} {...actions} />
  );

  return {
    component,
    actions,
    span: component.find('span'),
    btnIncrement: component.find('button').at(0),
    btnDecrement: component.find('button').at(1),
  };
}

describe('Count component', () => {
  it('initial render', () => {
    const { span, btnIncrement, btnDecrement } = setup();

    expect(span.text()).toBe('Clicked: 0 times');
    expect(btnIncrement.text()).toBe('+');
    expect(btnDecrement.text()).toBe('-');
  });

  it('should increase count when click + button', () => {
    const { btnIncrement, actions } = setup();
    btnIncrement.simulate('click');
    expect(actions.increment).toHaveBeenCalled();
  });

  it('should decrease count when click - button', () => {
    const { btnDecrement, actions } = setup();
    btnDecrement.simulate('click');
    expect(actions.decrement).toHaveBeenCalled();
  });
});
