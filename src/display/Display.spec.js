import React from 'react';
import Display from './Display';
import {render, fireEvent, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

test('Disply renders correctly', () => {
  render(<Display />);
});

describe('<Display />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test('Gate defaults to unlocked and open', () => {
  const {getByText} = render(<Display />);
  getByText(/unlocked/i);
  getByText(/open/i);
});