import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>

            <div className='flex 
                    justify-between 
                    items-center
                    h-14
                    mycontainer'>
                <div className="logo font-bold text-2xl">
                    <span className='text-orange-400'>&lt;</span>
                    Pass
                    <span className='text-orange-400'>OP&gt;</span>
                </div>
                <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href="#">Home</a>
                        <a className='hover:font-bold' href="#">About</a>
                        <a className='hover:font-bold' href="#">Contact</a>
                    </li>
                </ul>
                <div>
                    <button className='text-orange-400 bg-blue-300 rounded-full flex justify-between items-center ring-white ring-4 px-4'>
                        <span className='p-2'><lord-icon
                            src="https://cdn.lordicon.com/szoiozyr.json"
                            trigger="hover">
                        </lord-icon></span>
                        <span className='font-bold p-2'>Github</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar