import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    const tick = () => {
        // setCount(count + 1)
        setCount(prevCount=>prevCount + 1)
    }
    // useEffect(() => {
    //     const interval = setInterval(tick, 1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [count])
    // function doSomething(){
    //     console.log('do something');
    // }
    useEffect(() => {
        // function doSomething() {
        //     console.log(someProp);
        // }
        // doSomething()
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div className='text-center mt-5'>
            <h1 className='text-primary'>{count} (Hook)</h1>
        </div>
    )
}

export default IntervalHookCounter