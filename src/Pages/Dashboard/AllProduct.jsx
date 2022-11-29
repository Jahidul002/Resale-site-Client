import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MapedAllProduct from './MapedAllProduct';

const AllProduct = () => {
    const data = useLoaderData()
    return (
        <div className='md:grid grid-cols-3 gap-5'>
            {
                data?.map(dt => <MapedAllProduct key={dt._id} data={dt}></MapedAllProduct>)
            }
        </div>
    );
};

export default AllProduct;