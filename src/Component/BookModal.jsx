import React from 'react';
import { useContext } from 'react';
import { authContext } from '../Context/Context';

const BookModal = ({ price, name }) => {
    const { user } = useContext(authContext)


    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="Book-modal-2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card-body">
                        <div className='flex justify-evenly'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input name='name' defaultValue={user?.displayName} readOnly type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">email</span>
                                </label>
                                <input name='email' defaultValue={user?.email} readOnly type="text" placeholder="email" className="input input-bordered" />
                            </div>
                        </div>
                        <div className='flex justify-evenly'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item name</span>
                                </label>
                                <input defaultValue={name} readOnly name='Item' type="text" placeholder="Item name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item Price</span>
                                </label>
                                <input defaultValue={price} readOnly name='price' type="text" placeholder="Item Price" className="input input-bordered" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <input name='number' className="input input-bordered my-1" type="text" placeholder='Number' />
                        <input name='location' className="input input-bordered my-1" type="text" placeholder='Location of Meet' />
                    </div>

                    <div className="modal-action">
                        <label htmlFor="Book-modal-2" className="btn" type="submit">Submit</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookModal;