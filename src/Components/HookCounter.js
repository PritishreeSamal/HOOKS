import React from 'react'
import { useState } from 'react'

function HookCounter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount);
    function increment() {
        setCount(count + 1)
    }
    // function increment(){
    //     setCount(c=>c+1)
    // }
    function decrement() {
        if (count >= 1) setCount(c => c - 1)
    }
    function reset() {
        setCount(initialCount)
    }

    function increment5() {
        for (let i = 0; i < 5; i++) {
            setCount(c=>c + 1)
        }
    }

    return (
        <>
            <p className='ms-5 mt-5 ps-4'>{count}</p>
            <button className='m-5' onClick={increment}>Click ++ </button>
            <button className='m-5' onClick={decrement}>Click -- </button>
            <button className='m-5' onClick={reset}>Reset</button>
            <button className='m-5' onClick={increment5}>Increment 5</button>
        </>
    )
}

export default HookCounter