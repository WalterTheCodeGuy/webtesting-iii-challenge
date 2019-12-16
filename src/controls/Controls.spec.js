import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Controls from './Controls'
import { render, fireEvent } from '@testing-library/react'

test('closes gate when clicked', () =>{
    const toggleClosed = jest.fn()
    const {getByText} = render(<Controls locked={false} closed={false} toggleClosed={toggleClosed} /> )

    const gateBtn = getByText(/close gate/i)
    fireEvent.click(gateBtn);
    expect(toggleClosed).toHaveBeenCalled();
})

test('opens gate when clicked', () =>{
    const toggleClosed = jest.fn()
    const {getByText} = render(<Controls locked={false} closed={true} toggleClosed={toggleClosed} /> )

    const gateBtn = getByText(/open gate/i)
    fireEvent.click(gateBtn);
    expect(toggleClosed).toHaveBeenCalled();
})

test('open button disabled when locked', () =>{
    const toggleClosed = jest.fn()
    const {getByText} = render(<Controls locked={true} closed={true} toggleClosed={toggleClosed} /> )

    const gateBtn = getByText(/open gate/i)
    fireEvent.click(gateBtn);
    expect(toggleClosed).not.toHaveBeenCalled();
})

test('lock button disabled when open', () =>{
    const toggleClosed = jest.fn()
    const {getByText} = render(<Controls locked={false} closed={false} toggleClosed={toggleClosed} /> )

    const gateBtn = getByText(/lock gate/i)
    fireEvent.click(gateBtn);
    expect(toggleClosed).not.toHaveBeenCalled();
})