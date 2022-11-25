import React, { useContext } from 'react';
import { authContext } from '../Context/Context';

const UserInfo = () => {
    const { user } = useContext(authContext)

    return (
        <div>

            <input type="checkbox" id="user-info-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">

                    <div className='flex flex-col items-center'>
                        <img className='w-[300px] h-[200px] rounded-full' src={user?.photoURL} alt="" />
                        <h1 className='font-bold'>Name:{user?.displayName}</h1>
                        <h1 className='font-semibold'>Email:{user?.email}</h1>
                    </div>




                    <div className="modal-action">
                        <label htmlFor="user-info-modal" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;