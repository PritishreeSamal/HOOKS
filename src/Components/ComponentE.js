import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'

function ComponentE() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
      {/* <h5>{user} - {channel}</h5> */}
      <ComponentF />
    </div>
  )
}

export default ComponentE