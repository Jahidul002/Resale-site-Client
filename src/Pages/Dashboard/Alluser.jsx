import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Alluser = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>

        </div>
    );
};

export default Alluser;