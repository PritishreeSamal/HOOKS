import React, { useReducer } from 'react'

const InitialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return InitialState
        default:
            return state
    }
}
function HookUseReducerThree() {
    const [count, dispatch] = useReducer(reducer, InitialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, InitialState)
    return (
        <>
            <div className='text-center mt-5'>
                <h4>Count one : {count}</h4>
                <button onClick={() => dispatch('increment')}>Increment</button>&nbsp;
                <button onClick={() => dispatch('reset')}>Reset</button>&nbsp;
                <button onClick={() => dispatch('decrement')}>Decrement</button>
            </div>

            <hr className='m-5 text-danger' />
            <div className='text-center mt-5'>
                <h4>Count Two : {countTwo}</h4>
                <button onClick={() => dispatchTwo('increment')}>Increment</button>&nbsp;
                <button onClick={() => dispatchTwo('reset')}>Reset</button>&nbsp;
                <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            </div>
        </>
    )
}

export default HookUseReducerThree




