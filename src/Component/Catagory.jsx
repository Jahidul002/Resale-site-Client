import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CatagoryDisplay from './CatagoryDisplay';

const Catagory = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/catagory')
            .then(res => res.json())
            .then(data => {
                setdata(data)
                // console.log(data);
            })
    }, [])

    return (
        <div>
            <h1 className='text-center text-2xl font-semibold border-y-4 border-y-gray-600 pb-5 mb-5'>Select your  Catagory</h1>
            <hr />
            <div className='md:grid grid-cols-4  mx-auto gap-5'>
                {data?.map(dt => <CatagoryDisplay key={dt._id} data={dt}></CatagoryDisplay>)}
            </div>
        </div>
    );
};

export default Catagory;

