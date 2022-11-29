import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
import toast from 'react-hot-toast';



const MapedAllProduct = ({ data }) => {
    // console.log(data);
    const { img, name, resale, usedTime, _id, location } = data

    const handledel = id => {
        fetch(`http://localhost:5000/alldata/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload()
                toast.error('service deleted')
            })
    }





    return (
        <div>
            <div className="card card-compact h-[500px]  bg-base-100 shadow-xl">
                <figure><img className='w-full h-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price:{resale}</p>
                    <p>Used-time:{usedTime}</p>
                    <p>Location:{location}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handledel(_id)} className="btn btn-primary"> <TrashIcon className="h-6 w-6 text-blue-500" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapedAllProduct;