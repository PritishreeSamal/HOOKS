import React, { useEffect, useState } from 'react'

function HookUseEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('update');
        document.title = `Clicked ${count} times`
    },[count])
    return (
        <>
            <div className='text-center mt-5'>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
                <br />
                <br />
                <button onClick={() => setCount(count + 1)}>
                    Click {count} times
                </button>
            </div>

        </>
    )
}

export default HookUseEffect;