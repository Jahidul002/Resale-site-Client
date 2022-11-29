import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { authContext } from '../../Context/Context';

const MyProduct = () => {
    const { user } = useContext(authContext)
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/byUser?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setdata(data)
            })
    }, [user?.email])


    return (
        <div>
            {
                data?.map(dt => console.log(dt))
            }
        </div>
    );
};

export default MyProduct;