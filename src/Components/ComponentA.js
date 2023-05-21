import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentA() {
  const countContext = useContext(CountContext)
  return (
    <div className='text-center mt-5'>
      Component A - {countContext.countState}
      <br />
      <br />
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>&nbsp;
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>&nbsp;
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
    </div>
  )
}

export default ComponentA