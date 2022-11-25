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
        <div className='md:grid grid-cols-4  mx-auto gap-5'>
            {data?.map(dt => <CatagoryDisplay key={dt._id} data={dt}></CatagoryDisplay>)}
        </div>
    );
};

export default Catagory;