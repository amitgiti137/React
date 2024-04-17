import React from 'react'

function Task({image,heading,text,btnText}) {
  return (
    <>
    <div>
        <img className="h-[200px] w-full rounded-md object-cover" src={image} alt="image" />
        <h1 className='text-lg font-semibold'>{heading}</h1>
        <h1 className='text-lg font-semibold'>{text}</h1>
        <button className='bg-bule-200 border border-red-400 riunded-full mx-10 py-1 px-10'>{btnText}</button>
    </div>
    </>
  )
}

export default Task