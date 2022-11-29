import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from '../Component/UserInfo';
import { authContext } from '../Context/Context';

const Navber = () => {
    const { user, LogOut } = useContext(authContext)

    const handleDel = e => {
        LogOut()
            .then(res => { })
            .then(err => console.error(err))
    }



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-red-200">
                        <Link className='btn-outline my-2' to="/">Home</Link>
                        <Link className='btn-outline my-2' to="/add-product">Add Service</Link>
                        <Link className='btn-outline my-2' to="/dashboard">Dashboard</Link>

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 flex justify-center items-center">
                    <Link className='btn btn-outline mx-2' to="/">Home</Link>
                    <Link className=' btn btn-outline mx-2' to="/add-product">Add Service</Link>
                    <Link className=' btn btn-outline mx-2' to="/dashboard">Dashboard</Link>

                </ul>
            </div>
            <div className="navbar-end">
                {user ? <>
                    <div className='flex'>
                        <button onClick={handleDel} className='btn'>Logout</button>

                        <div className="tooltip tooltip-left" data-tip="click here
                            for view details">
                            <label htmlFor="user-info-modal">
                                <img className='h-12 w-12 rounded-full mx-2' src={user?.photoURL} alt="" />
                            </label>


                        </div>
                        <UserInfo></UserInfo>
                    </div>
                </>
                    :
                    <>
                        <Link className='btn btn-outline mx-2' to="/login">Log In</Link>
                        <Link className='btn btn-outline mx-2' to="/register">Register</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navber;