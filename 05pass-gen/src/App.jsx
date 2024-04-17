import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'



function App() {
  const [len, setLen] = useState(8)
  const [numAll, setNumAll] = useState(false)
  const [charAll, setCharAll] = useState(false)
  const [pass, setPass] = useState("")


  const passref=useRef(null)
  
  const passgen=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAll) str +="0123456789"
    if(charAll) str +="!@#$%^&*(){}"

for (let i = 1; i <= len; i++) {
  let char = Math.floor(Math.random() * str.length + 1)
  pass+=str.charAt(char)
}
setPass(pass)
  }
  ,[len,numAll,charAll,setPass])

  const copytoclipboard=useCallback(()=>{
    passref.current?.select()
    passref.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(pass)
  }
  ,[pass])

  useEffect(()=>{
    passgen()
  }
  ,[len,numAll,charAll,passgen])

  return ( 
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Passwor Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type='text'
          value={pass}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passref}
          />
          <button
          onClick={copytoclipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={len}
            className='cursor-pointer'
            onChange={(e)=>{setLen(e.target.value)}}
            />
            <label>Length:{len}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numAll}
            id='numberInput'
            onChange={()=>{setNumAll((prev)=>!prev)}}
            />
            <label>Numbers{numAll}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAll}
            id='characterInput'
            onChange={()=>{setCharAll((prev)=>!prev)}}
            />
            <label>Characters{charAll}</label>
          </div>      
        </div>
      </div>
    </>
  )
}

export default App
