import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { authContext } from '../../Context/Context';
import useAdmin from '../../Hook/UseAdmin';
import useSeller from '../../Hook/UseSeller';
import Navber from '../../Shared/Navber';

const DashHome = () => {
    const { user } = useContext(authContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <div>
                <div><Navber></Navber></div>
                <div>

                    <div className="drawer drawer-mobile">
                        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content ">
                            <Outlet></Outlet>
                            <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>

                        </div>
                        <div className="drawer-side">
                            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                                {
                                    isAdmin && <>
                                        <Link className='my-2  hover:bg-slate-500  p-2 rounded-md font-semibold text-xl' to="/dashboard/all-user"><p>All User</p></Link>
                                        <Link className='my-2  hover:bg-slate-500  p-2 rounded-md font-semibold text-xl' to="/dashboard/all-product">All product</Link>
                                        <Link className='my-2  hover:bg-slate-500  p-2 rounded-md font-semibold text-xl' to="/dashboard/reported-product">Reported product</Link>
                                    </>
                                }
                                {
                                    isSeller && <>
                                        <Link className='my-2  hover:bg-slate-500  p-2 rounded-md font-semibold text-xl' to="/dashboard/my-product">My product</Link>
                                        <Link className='my-2 hover:bg-slate-500 p-2 rounded-md font-semibold text-xl' to="/add-product">Add product</Link>
                                    </>
                                }
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashHome;