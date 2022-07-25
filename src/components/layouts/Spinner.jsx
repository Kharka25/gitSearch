import React from 'react'
import spinner1 from './assets/spinner1.gif'

const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
        <img className='text-center mx-auto' width={180}
             src={spinner1} alt="Loading..." />
    </div>
  )
}

export default Spinner