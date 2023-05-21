import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePosition = e => {
        // console.log('mouse');
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        // console.log('useEffect');
        window.addEventListener('mousemove', logMousePosition)
        // document.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('return');
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <>
            <div className='text-center mt-5'>
                X-{x} Y-{y}
            </div>

        </>
    )
}

export default HookMouse