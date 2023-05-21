import React from 'react'
import { useState } from 'react'

function HookCounterArray() {
    const [items, setItems] = useState([])
    const addIt=()=>{
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <>
            <div className='mt-5 ms-5'>
                <button onClick={addIt}>Add a number</button>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default HookCounterArray