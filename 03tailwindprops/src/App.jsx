import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"amit@1317",
    age:28
  }
  let newArr=["superman","batman","spiderman"]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card uname="chaiaurcode" btnText="click me"/>
      <Card uname="chaiaurbakchode" />
    </>
  )
}

export default App
