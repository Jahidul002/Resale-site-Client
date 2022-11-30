import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MappedReportedProduct from './MappedReportedProduct';

const ReportedProduct = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            {
                data?.map(dt => <MappedReportedProduct key={dt._id} data={dt}></MappedReportedProduct>)
            }
        </div>
    );
};

export default ReportedProduct;