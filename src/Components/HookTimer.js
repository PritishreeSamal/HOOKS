import React, { useEffect, useRef, useState } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef=useRef()
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    },[])
    return (
        <div className='text-center mt-5'>
            <h3>Count Timer {timer}</h3>
            <br />
            <div class="d-grid gap-6 col-2 mx-auto">
                <button class="btn btn-dark" type="button" onClick={() => clearInterval(intervalRef.current)}>Stop</button>
            </div>
        </div>
    )
}

export default HookTimer