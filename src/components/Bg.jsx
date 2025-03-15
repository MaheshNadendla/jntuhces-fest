import React from 'react'

import AI from '../assets/AI.jpg'

function Bg() {
  return (
    <div style={{ height:'100dvh',width:'100dvw',backgroundImage: `url(${AI})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position : 'fixed',
    top : '0%',
    left : '0%',zIndex:'-10'}}></div>
  )
}

export default Bg
