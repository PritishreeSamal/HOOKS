
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';


// export default function UseEffectComponent() {
//     const [resourceType, setResourceType] = useState('posts');
//     console.log('res');
//     useEffect(()=>{
//         console.log('render');
//     },[resourceType])
//     return (
//         <>
//             <div className='container mt-5 text-center'>
//                 <Button onClick={() => setResourceType('posts')} variant="outlined">Posts</Button>  &nbsp; &nbsp; &nbsp; &nbsp;
//                 <Button onClick={() => setResourceType('users')} variant="outlined">Users</Button>  &nbsp; &nbsp; &nbsp; &nbsp;
//                 <Button onClick={() => setResourceType('comments')} variant="outlined">Comments</Button>

//                 <h1 className='mt-5'>{resourceType}</h1>
//             </div>
//         </>
//     )
// }
export default function UseEffectComponent() {
    const [count, setCount] = useState(1);
    const [counts, setCounts] = useState(9);
    useEffect(()=>{
        alert("I am Clicked")
    },[count])

    // function increment() {
    //     setCount(preState => preState + 1);
    // }
    function decrement() {
        if (count >= 2) {
            setCount(preState => preState - 1);
        }
    }
    function decrements() {
        if (counts >= 2) {
            setCounts(preState => preState - 1);
        }
    }
    return (
        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-center mb-5">
                    <IconButton onClick={decrement} aria-label="delete" size="large" color="primary">
                        <RemoveIcon fontSize="inherit" />
                    </IconButton>
                    <div className="d-flex justify-content-center align-items-center" style={{ width: '50px', fontSize: '30px' }}>{count}</div>
                    {/* <IconButton onClick={(()=>{setCount(count+1);},()=>{alert("I am Clicked");})} aria-label="delete" size="large" color="primary">
                        <AddIcon fontSize="inherit" />
                    </IconButton> */}
                    <IconButton onClick={(()=>{setCount(count+1);})} aria-label="delete" size="large" color="primary">
                        <AddIcon fontSize="inherit" />
                    </IconButton>

                </div>
                <div className="d-flex justify-content-center mt-5">
                    <IconButton onClick={decrements} aria-label="delete" size="large" color="primary">
                        <RemoveIcon fontSize="inherit" />
                    </IconButton>
                    <div className="d-flex justify-content-center align-items-center" style={{ width: '50px', fontSize: '30px' }}>{counts}</div>
                    {/* <IconButton onClick={(()=>{setCount(count+1);},()=>{alert("I am Clicked");})} aria-label="delete" size="large" color="primary">
                        <AddIcon fontSize="inherit" />
                    </IconButton> */}
                    <IconButton onClick={(()=>{setCounts(counts+1);})} aria-label="delete" size="large" color="primary">
                        <AddIcon fontSize="inherit" />
                    </IconButton>

                </div>
            </div>

        </>
    )
}
