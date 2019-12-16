import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';
import { render, fireEvent } from '@testing-library/react';

test('displays open green', ()=>{
    const {getByText} = render(<Display closed={false} locked={false} />)
    const open = getByText(/open/i)
    expect(open).toBeDefined();
    expect(open).toHaveClass('green-led');
})

test('displays closed with red', ()=>{
    const {getByText} = render(<Display closed={true} locked={false} />)
    const closed = getByText(/closed/i)
    expect(closed).toBeDefined();
    expect(closed).toHaveClass('red-led')
})

test('displays unlocked green', ()=>{
    const {getByText} = render(<Display closed={false} locked={false} />)
    const unlocked = getByText(/unlocked/i)
    expect(unlocked).toBeDefined();
    expect(unlocked).toHaveClass('green-led');
})

test('displays locked with red', ()=>{
    const {getByText} = render(<Display closed={true} locked={true} />)
    const locked = getByText(/locked/i)
    expect(locked).toBeDefined();
    expect(locked).toHaveClass('red-led')
})