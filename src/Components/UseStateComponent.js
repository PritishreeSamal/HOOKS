import React, { useState } from "react";

import AddIcon from '@mui/icons-material/Add';
import { IconButton } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';

// export default function UseStateComponent() {
//   const [count,setCount]=useState(4);
//   function increment(){
//     setCount(prevCount=>prevCount+1)
//   }
//   function decrement(){
//     if(count>=1){
//       setCount(prevCount=>prevCount-1)
//     }
//   }
//   return (
//     <>
//       <div className="container mt-5">
//         <div className="d-flex justify-content-center">
//           <IconButton onClick={decrement} aria-label="delete" size="large" color="primary">
//             <RemoveIcon fontSize="inherit" />
//           </IconButton>
//           <div className="d-flex justify-content-center align-items-center" style={{width:'50px',fontSize:'30px'}}>{count}</div>
//           <IconButton onClick={increment} aria-label="delete" size="large" color="primary">
//             <AddIcon fontSize="inherit" />
//           </IconButton>

//         </div>
//       </div>

//     </>
//   )
// }



// export default function UseStateComponent() {
//   const [count,setCount]=useState(()=>{
//     console.log('Initial');
//     return 4;
//   });
//   function increment(){
//     setCount(prevCount=>prevCount+1)
//   }
//   function decrement(){
//     if(count>=1){
//       setCount(prevCount=>prevCount-1)
//     }
//   }
//   return (
//     <>
//       <div className="container mt-5">
//         <div className="d-flex justify-content-center">
//           <IconButton onClick={decrement} aria-label="delete" size="large" color="primary">
//             <RemoveIcon fontSize="inherit" />
//           </IconButton>
//           <div className="d-flex justify-content-center align-items-center" style={{width:'50px',fontSize:'30px'}}>{count}</div>
//           <IconButton onClick={increment} aria-label="delete" size="large" color="primary">
//             <AddIcon fontSize="inherit" />
//           </IconButton>

//         </div>
//       </div>

//     </>
//   )
// }


// This is gonna run every time
// function InitialCount(){
//   console.log('Initial');
//   return 4;
// }
// export default function UseStateComponent() {
//   const [count,setCount]=useState(InitialCount());
//   function increment(){
//     setCount(prevCount=>prevCount+1)
//   }
//   function decrement(){
//     if(count>=1){
//       setCount(prevCount=>prevCount-1)
//     }
//   }
//   return (
//     <>
//       <div className="container mt-5">
//         <div className="d-flex justify-content-center">
//           <IconButton onClick={decrement} aria-label="delete" size="large" color="primary">
//             <RemoveIcon fontSize="inherit" />
//           </IconButton>
//           <div className="d-flex justify-content-center align-items-center" style={{width:'50px',fontSize:'30px'}}>{count}</div>
//           <IconButton onClick={increment} aria-label="delete" size="large" color="primary">
//             <AddIcon fontSize="inherit" />
//           </IconButton>

//         </div>
//       </div>

//     </>
//   )
// }


// export default function UseStateComponent() {
//   const [state,setState]=useState({count:1,theme:'blue'});
//   const count=state.count
//   const theme=state.theme
//   function increment(){
//     setState(preState => {
//       return { ...preState,count: preState.count + 1 }
//     })
//   }
//   function decrement(){
//     if(count>=2){
//       setState(preState=>{
//         return {count:preState.count-1}
//       })
//     }
//   }
//   return (
//     <>
//       <div className="container mt-5">
//         <div className="d-flex justify-content-center">
//           <IconButton onClick={decrement} aria-label="delete" size="large" color="primary">
//             <RemoveIcon fontSize="inherit" />
//           </IconButton>
//           <div className="d-flex justify-content-center align-items-center" style={{width:'50px',fontSize:'30px'}}>{count}</div>
//           <div className="d-flex justify-content-center align-items-center" style={{width:'50px',fontSize:'30px'}}>{theme}</div>
//           <IconButton onClick={increment} aria-label="delete" size="large" color="primary">
//             <AddIcon fontSize="inherit" />
//           </IconButton>

//         </div>
//       </div>

//     </>
//   )
// }


export default function UseStateComponent() {
  const [count, setCount] = useState(1);
  const [theme, setTheme] = useState('blue');

  function increment() {
    setCount(preState => preState +1);
    if(theme==='blue'){
      setTheme('red');
    }
    else{
      setTheme('blue');
    }
  }
  function decrement() {
    if (count >= 2) {
      setCount(preState => preState - 1);
      if (theme === 'red') {
        setTheme('blue');
      }
      else {
        setTheme('red');
      }
    }
  }
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <IconButton onClick={decrement} aria-label="delete" size="large" color="primary">
            <RemoveIcon fontSize="inherit" />
          </IconButton>
          <div className="d-flex justify-content-center align-items-center" style={{ width: '50px', fontSize: '30px' }}>{count}</div>
          <div className="d-flex justify-content-center align-items-center" style={{ width: '50px', fontSize: '30px' }}>{theme}</div>
          <IconButton onClick={increment} aria-label="delete" size="large" color="primary">
            <AddIcon fontSize="inherit" />
          </IconButton>

        </div>
      </div>

    </>
  )
}
