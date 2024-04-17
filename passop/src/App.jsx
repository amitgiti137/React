import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Managerak from './component/Managerak'
import Footer from './component/Footer'
import Task from './component/Task'
import Api from './component/Api'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Managerak />
        <Footer />
        <div className='flex justify-between mx-20'>
          <Task image="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" heading="This is heading 1" text="This is text 1" btnText="1" />
          <Task image="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" heading="This is heading 2" text="This is text 2" btnText="2" />
          <Task image="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" heading="this is heading 3" text="this is text 3" btnText="3" />
        </div>
        <Api/>
      </div>
    </>
  )
}

export default App
