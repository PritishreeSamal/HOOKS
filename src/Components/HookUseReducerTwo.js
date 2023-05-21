import React, { useReducer } from 'react'

const InitialState = {
    firstCounter: 0,
    secondCounter: 10,
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }

        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }

        case 'reset':
            return InitialState
        default:
            return state
    }
}
function HookUseReducerTwo() {
    const [count, dispatch] = useReducer(reducer, InitialState)
    return (
        <div className='text-center mt-5'>
            <h4>First Counter -( {count.firstCounter} )</h4>
            <h4>Second Counter -( {count.secondCounter} )</h4>
            <br />
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>&nbsp;

            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>&nbsp; &nbsp; &nbsp;


            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>&nbsp;

            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>



            <div className='text-center mt-5'>
                <button onClick={() => dispatch({ type: 'reset', value: 1 })}>Reset</button>&nbsp; &nbsp; &nbsp;
            </div>



            <div className='text-center mt-5'>
                <button onClick={() => dispatch({ type: 'increment2', value: 2 })}>Increment 2</button>&nbsp; &nbsp; &nbsp;

                <button onClick={() => dispatch({ type: 'decrement2', value: 2 })}>Decrement 2</button>&nbsp;
            </div>
        </div>
    )
}

export default HookUseReducerTwo

