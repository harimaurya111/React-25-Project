// src/components/CounterComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/counterSlice'; // Adjust path based on your structure

const CounterComponent = () => {
    const count = useSelector((state) => state.counter.value); // Access state
    const dispatch = useDispatch(); // Dispatch actions

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>
                Increment by 5
            </button>
        </div>
    );
};

export default CounterComponent;
