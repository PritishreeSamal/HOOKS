import React, { useState } from 'react'
import HookMouse from './HookMouse'
import ClassMouse from './ClassMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div className='text-center mt-5'>
            <button onClick={() => setDisplay(!display)}>
                Toggle Display
            </button>
            {/* <h4>{display && <HookMouse/>}</h4> */}
            <h4>{display && <HookMouse/>}</h4>
        </div>
    )
}

export default MouseContainer