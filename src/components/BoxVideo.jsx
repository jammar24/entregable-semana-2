import React from 'react'
import Videodg from '/Videodg.mp4'

const BoxVideo = () => {
  return (
    <div className='main'>
      <video src={Videodg} autoPlay loop muted playsInline className='back__video'/>
    </div>
  )
}

export default BoxVideo