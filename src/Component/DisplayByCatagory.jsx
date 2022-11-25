import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Carddisplay from './Carddisplay';

const DisplayByCatagory = () => {
    const data = useLoaderData()
    // console.log(data);


    return (
        <div className='md:grid grid-cols-2 mx-auto'>
            {
                data?.map(dt => <Carddisplay key={dt._id} data={dt}></Carddisplay>)
            }
        </div>
    );
};

export default DisplayByCatagory;