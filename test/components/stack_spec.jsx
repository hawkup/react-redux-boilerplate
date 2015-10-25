import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import Stack from '../../src/components/Stack';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, scryRenderedDOMComponentsWithClass, Simulate} = ReactTestUtils;

describe('Stack Component', () => {
  it('invokes callback when PUSH button is clicked', () => {
    let listItems = [];
    const push = (text) => listItems.push(text);
    const component = renderIntoDocument(
      <Stack lists={listItems} push={push} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);
    Simulate.click(buttons[0]);
    expect(listItems.length).to.equal(2);
  });

  it('invokes callback when POP button is clicked', () => {
    let listItems = ['Hello Worlds', 'Hello Worlds'];
    const pop = () => listItems.pop();
    const component = renderIntoDocument(
      <Stack lists={listItems} pop={pop} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[1]);
    expect(listItems.length).to.equal(1);
  });

  it('invokes callback when lists is empty and POP button is clicked', () => {
    let listItems = [];
    const pop = () => listItems.pop();
    const component = renderIntoDocument(
      <Stack lists={listItems} pop={pop} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[1]);
    Simulate.click(buttons[1]);
    Simulate.click(buttons[1]);
    expect(listItems.length).to.equal(0);
  });
});