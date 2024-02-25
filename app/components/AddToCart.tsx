'use client'
import React from 'react'

const AddToCart = () => {
  return (
    <div>
    {/* class name value comes from daisy ui */}
          <button className='btn btn-primary' onClick={()=> console.log('Click')}>Add to card</button>
    </div>
  )
}

export default AddToCart