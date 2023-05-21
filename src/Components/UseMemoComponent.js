import React, { useState, useMemo } from 'react'
import { Button } from "@mui/material";

export default function UseMemoComponent() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    },[number]);
    const themeStyle = {
        backgroundColor: dark ? 'black' : '#F0F0F0',
        color: dark ? 'white' : 'black'
    }
    // console.log(dark);
    return (
        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-center flex-column">
                    <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
                    <Button onClick={() => setDark(prevOrak => !prevOrak)}>Change Theme</Button>
                    <div className="d-flex justify-content-center align-items-center" style={themeStyle}>{doubleNumber}</div>
                </div>
            </div>
        </>
    )
}
function slowFunction(num) {
    console.log('calling slow function');
    for (let i = 0; i <= 100000000000; i++) {
        return num * 2;
    }
}
