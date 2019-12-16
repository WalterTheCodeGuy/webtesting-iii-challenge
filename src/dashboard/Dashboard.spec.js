import React from 'react';
import Dashboard from './Dashboard';
import { render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

test('Dashboard renders correctly', () => {
    render(<Dashboard />);
  });

describe('<Dashboard />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

test('Dashboard renders controls and display', () => {
    const wrapper = render(<Dashboard/>);
    const display = wrapper.container.querySelector('.display');
    const controls = wrapper.container.querySelector('.controls');
    expect(display).toBeTruthy();
    expect(controls).toBeTruthy();
});