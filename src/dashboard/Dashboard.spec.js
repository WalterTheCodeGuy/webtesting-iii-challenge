  
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './Dashboard'
import { render, fireEvent } from '@testing-library/react'

test('Renders dashboard correctly', ()=> {
    const wrapper = render(<Dashboard/>);
    expect(wrapper.asFragment()).toMatchSnapshot();
})