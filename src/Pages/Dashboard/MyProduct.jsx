import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { authContext } from '../../Context/Context';
import MappedMyProduct from './MappedMyProduct';

const MyProduct = () => {
    const { user } = useContext(authContext)
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(`https://assignment-12-server-theta-orcin.vercel.app/byUser?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setdata(data)
            })
    }, [user?.email])


    return (
        <div>
            {
                data?.map(dt => <MappedMyProduct key={dt._id} data={dt}></MappedMyProduct>)
            }
        </div>
    );
};

export default MyProduct;