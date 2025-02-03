import React from 'react'

function InfoTitle(props) {
  return (
    <div className='flex justify-center items-center flex-col pt-10'>
    <div className="px-10 py-6">
      <p className='font-semibold text-base text-center text-blue-600'>
       {props.subheading}
      </p>
      <p className='font-normal text-black text-center py-4 text-2xl md:text-5xl leading-tight'>
        {props.heading} <br /> {props.nextLine}
      </p>
    </div>
  </div>
  
  )
}

export default InfoTitle