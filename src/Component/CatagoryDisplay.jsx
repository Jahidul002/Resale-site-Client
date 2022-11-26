import React from 'react';
import { Link } from 'react-router-dom';
import DisplayByCatagory from './DisplayByCatagory';

const CatagoryDisplay = ({ data }) => {
    const { name, pic } = data
    return (
        <div>
            <div className="card card-compact h-80 bg-base-100 shadow-xl">
                <figure><img className='h-full w-full' src={pic} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/displaybyCata/${name}`}>
                            <button className="btn btn-primary">View All</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatagoryDisplay;