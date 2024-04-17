import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


function Managerak() {

    const [form, setform] = useState({ site: '', username: '', password: '' })
    const [passwordsArray, setpasswordsArray] = useState([])

    const reff = useRef()
    const passwordRef = useRef()

    const showPassword = () => {
        passwordRef.current.type = 'text'
        console.log(reff.current.src);
        if (reff.current.src.includes("https://cdn.lordicon.com/zbbefawl.json")) {
            reff.current.src = "https://cdn.lordicon.com/fmjvulyw.json"
            reff.current.alt = 'eye'
            passwordRef.current.type = 'text'
        }
        else {
            reff.current.src = "https://cdn.lordicon.com/zbbefawl.json"
            reff.current.alt = 'ceye'
            passwordRef.current.type = 'password'
        }
    }

    useEffect(() => {
        let passwords = localStorage.getItem('passwords')
        if (passwords) {
            setpasswordsArray(JSON.parse(passwords))
        }
    }, [])


    const savePassword = () => {
        setpasswordsArray([...passwordsArray, { ...form, id: uuidv4() }])
        localStorage.setItem('passwords', JSON.stringify([...passwordsArray, { ...form, id: uuidv4() }]))
        console.log(...passwordsArray, form)
        setform({ site: '', username: '', password: '' })
    }

    const editPassword = (id) => {
        console.log('Edit password with id:', id)
        setform(passwordsArray.filter(i => i.id === id)[0])
        setpasswordsArray(passwordsArray.filter(item => item.id !== id))
    }

    const deletePassword = (id) => {
        console.log('Delete password with id:', id)
        let con = confirm('Do you want to delete your form')
        if (con) {
            setpasswordsArray(passwordsArray.filter(item => item.id !== id))
            localStorage.setItem('passwords', JSON.stringify(passwordsArray.filter(item => item.id !== id)))
        }
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    const copyText = (text) => {
        navigator.clipboard.writeText(text)
    }





    return (
        <>
            <div className="bg-blue-950">
                <div className="mycontainer">
                    <h1 className='text-center text-4xl font-bold text-white'>
                        <span className='text-orange-400'>&lt;</span>
                        Pass
                        <span className='text-orange-400'>OP&gt;</span>
                    </h1>
                    <p className='text-orange-300 text-center text-lg'>Your Own Password Manager</p>

                    <div className='flex flex-col p-1 gap-8 text-black items-center'>
                        <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border-1 border-orange-400 w-full px-1 py-1' type='text' name='site' id='s' />
                        <div className='flex w-full justify-between gap-8'>
                            <input value={form.username} onChange={handleChange} placeholder='Enter Your Username' className='rounded-full border-1 border-orange-400 w-full px-1 py-1' type='text' name='username' id='u' />
                            <div className='relative'>
                                <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Your Password' className='rounded-full border-1 border-orange-400 w-full px-1 py-1' type='password' name='password' id='p' />
                                <span className='absolute right-[4px] top-[0.5px]'>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/fmjvulyw.json" alt="eye"
                                        trigger="hover" onClick={showPassword} ref={reff} className='p-1 width={26}'>
                                    </lord-icon>
                                </span>
                            </div>
                        </div>
                        <button onClick={savePassword} className='flex justify-center items-center rounded-full border-1 gap-2 border border-white font-bold px-10 py-1 bg-red-200 w-fit hover:bg-blue-300'>
                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover">
                            </lord-icon>
                            Save</button>
                    </div>
                    <div className='passwords'>
                        <h1 className='text-2xl font-bold text-green-300 py-1'>
                            <span className='text-orange-400'>&lt;You</span>
                            r P
                            <span className='text-orange-400'>asswords&gt;</span>
                        </h1>
                        {passwordsArray.length === 0 && <div className='text-red-900 font-bold text-xl'>No Password to Show</div>}
                        {passwordsArray.length != 0 &&
                            <table className="table-auto w-full rounded-md overflow-hidden">
                                <thead className='bg-orange-400 text-white py-2 border border-red-500'>
                                    <tr>
                                        <th>Site</th>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-green-100'>
                                    {passwordsArray.map((item, index) => {
                                        return <tr key={index}>
                                            <td className='text-center py-2 border border-red-500'>
                                                <div className='flex justify-center items-center'>
                                                    <a href='item.site' target='_blank'>
                                                        <span>{item.site}</span>
                                                    </a>
                                                    <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            src="https://cdn.lordicon.com/ciqqqyun.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-center py-2 border border-red-500'>
                                                <div className='flex justify-center items-center'>
                                                    <span>{item.username}</span>
                                                    <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            src="https://cdn.lordicon.com/ciqqqyun.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-center py-2 border border-red-500'>
                                                <div className='flex justify-center items-center'>
                                                    <span>{item.password}</span>
                                                    <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            src="https://cdn.lordicon.com/ciqqqyun.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-center py-2 border border-red-500'>
                                                <div className='flex justify-center items-center'>
                                                    <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/zfzufhzk.json"
                                                            trigger="hover"
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}>
                                                        </lord-icon>
                                                    </span>
                                                    <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/xekbkxul.json"
                                                            trigger="hover"
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}>
                                                        </lord-icon>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Managerak