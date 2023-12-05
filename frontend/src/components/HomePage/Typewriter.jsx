import React from 'react'
import './Typewriter.css'
import Typed from "react-typed";
const Typewriter = () => {
  return (
    <div className='animated-typing'>
      <Typed 
      strings={[
        "Pallete Poetry by Soumya Agrawal"
      ]}
      typeSpeed={100}
      backSpeed={100}
      loop
      />
    </div>
  )
}

export default Typewriter
