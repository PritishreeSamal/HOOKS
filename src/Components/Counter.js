import React, { useMemo, useState } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    const isEven = useMemo(() => {
        let i = 0
        while (i < 200000000) i++
        return counterOne % 2 === 0
    }, [counterOne])


    return (
        <div className='text-center mt-5'>
            <button onClick={incrementOne}>Count One - {counterOne}</button>
            <br />
            <br />
            <span>{isEven ? 'even' : 'odd'}</span>
            <br />
            <br />
            <button onClick={incrementTwo}>Count One - {counterTwo}</button>
        </div>
    )
}

export default Counter