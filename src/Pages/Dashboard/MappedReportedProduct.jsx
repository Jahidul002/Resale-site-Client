import React from 'react';
import toast from 'react-hot-toast';
import { ExclamationCircleIcon, TrashIcon } from '@heroicons/react/24/solid'


const MappedReportedProduct = ({ data }) => {
    const { img, name, location, resale, usedTime, _id } = data


    const handledel = id => {
        fetch(`https://assignment-12-server-theta-orcin.vercel.app/alldata/${id}`, {
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
            <div className="card card-compact h-[600px] md:w-96 bg-base-100 shadow-xl">
                <figure><img className='h-full w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Location:{location}</p>
                    <p className='font-semibold'>New price:<span className='text-rose-600'>{data.new}</span></p>
                    <p className='font-semibold'>Resale price:<span className='text-yellow-900'>{resale}</span></p>
                    <p className='font-semibold'>Used Time:<span className='text-yellow-900'>{usedTime}</span></p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handledel()} className='btn'><TrashIcon className='w-5 h-5' /></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MappedReportedProduct;