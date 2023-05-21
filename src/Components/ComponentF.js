// import React from 'react'
// import { UserContext, ChannelContext } from '../App'
// function ComponentF() {
//     return (
//         <div>
//             <UserContext.Consumer>
//                 {
//                     user => {
//                         return (
//                             <ChannelContext.Consumer>
//                                 {
//                                     channel => {
//                                         return <h4>User Context Value : &nbsp; {user}, Channel Context Value : &nbsp; {channel} </h4>
//                                     }
//                                 }
//                             </ChannelContext.Consumer>
//                         )
//                     }
//                 }
//             </UserContext.Consumer>

//         </div>
//     )
// }

// export default ComponentF


import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentF() {
    const countContext = useContext(CountContext)
    return (
        <div className='text-center mt-5'>Component F -  {countContext.countState}
            <br />
            <br />
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>&nbsp;
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>&nbsp;
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        </div>
    )
}

export default ComponentF