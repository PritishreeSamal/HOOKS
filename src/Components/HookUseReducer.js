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
function HookUseReducer() {
  const [count, dispatch] = useReducer(reducer, InitialState)
  return (
    <div className='text-center mt-5'>
      <h4>{count}</h4>
      <button onClick={()=>dispatch('increment')}>Increment</button>&nbsp;
      <button onClick={()=>dispatch('reset')}>Reset</button>&nbsp;
      <button onClick={() => dispatch('decrement')}>Decrement</button>
    </div>
  )
}

export default HookUseReducer

