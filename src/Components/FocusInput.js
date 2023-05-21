import React, { useEffect, useRef } from 'react'

function FocusInput() {
    const inputRef=useRef(null)
    useEffect(() => {
        // Focus input element
        inputRef.current.focus()

    }, [])
    return (
        <div className="text-center mt-5">
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default FocusInput