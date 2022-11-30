import React from 'react';
import toast from 'react-hot-toast';
import { json, Link } from 'react-router-dom';
import BookModal from './BookModal';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { authContext } from '../Context/Context';
import useSeller from '../Hook/UseSeller';

const Carddisplay = ({ data }) => {
    // console.log(data);
    const { user } = useContext(authContext)
    const [isSeller] = useSeller(user?.email)
    const { img, name, location, resale, usedTime, _id } = data

    const handlereport = () => {
        const data = {
            img: img,
            name: name,
            location: location,
            resale: resale,
            usedTime: usedTime
        }
        fetch('https://assignment-12-server-theta-orcin.vercel.app/report', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('item reported,wait for admin feedback')
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
                        {
                            isSeller && <>
                                <Link><button onClick={() => handlereport()} className='btn '>
                                    <ExclamationCircleIcon className='w-6 h-6' />
                                    report
                                </button></Link>
                            </>
                        }
                        <label htmlFor="Book-modal-2" className="btn btn-primary">
                            <Link to={`/modal/${_id}`}>Book Now</Link>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carddisplay;