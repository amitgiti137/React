import React from 'react'

function Footer() {
  return (
    <>
      <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-col justify-center items-center py-14">
        <div className="logo font-bold text-2xl py-2 text-white">
          <span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>OP&gt;</span>
        </div>
        <div className='font-bold text-gray-600 flex justify-center items-center gap-1'>Created with
          <span>
            <lord-icon
              src="https://cdn.lordicon.com/igciyimj.json"
              trigger="hover">
            </lord-icon>
          </span>
          by AK</div>
      </div>
    </>
  )
}

export default Footer