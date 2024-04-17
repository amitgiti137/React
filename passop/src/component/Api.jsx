import React, { useEffect, useState } from 'react'

const Api = () => {
    const [data, setdata] = useState([]);


    // useEffect(() => {
    //     fetch('https://randomuser.me/api/')
    //         .then((response) => 
    //             response.json())
    //                 .then((data) => {
    //                     setdata(data.results);
    //                 })
    //                 .catch((error) => {
    //                     console.log('Not fetching data', error);
    //                 })

    // }, [])
    // console.log(data)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/');
                const data = await response.json();
                setdata(data.results);
            } catch (error) {
                console.log('Not fetching data', error);
            }
        };

        fetchData();
    }, []);
    console.log(data);

    return (
        <div className='flex justify-center items-center w-full gap-'>
            <table>
                <thead>
                    <tr>
                        <th className='border-blue-400 px-10 py-3 border-4'>Name</th>
                        <th className='border-blue-400 px-10 py-3 border-4'>Email</th>
                        <th className='border-blue-400 px-10 py-3 border-4'>Gender</th>
                        <th className='border-blue-400 px-10 py-3 border-4'>Age</th>
                        <th className='border-blue-400 px-10 py-3 border-4'>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index}>
                            <td className='border-orange-400 px-10 py-3 border-4'>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
                            <td className='border-orange-400 px-10 py-3 border-4'>{user.email}</td>
                            <td className='border-orange-400 px-10 py-3 border-4'>{user.gender}</td>
                            <td className='border-orange-400 px-10 py-3 border-4'>{user.dob.age}</td>
                            <td className='border-orange-400 px-10 py-3 border-4'>{`${user.location.city}, ${user.location.country}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Api;