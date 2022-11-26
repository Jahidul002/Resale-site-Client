import React from 'react';
import BookModal from './BookModal';

const Carddisplay = ({ data }) => {
    console.log(data);
    const { img, name, location, resale, usedTime, _id } = data


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
                        <label htmlFor="Book-modal-2" className="btn btn-primary">Book Now</label>
                    </div>
                    <BookModal
                        name={name}
                        price={resale}
                    ></BookModal>
                </div>
            </div>
        </div>
    );
};

export default Carddisplay;