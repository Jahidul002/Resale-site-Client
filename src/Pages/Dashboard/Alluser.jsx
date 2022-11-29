import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayAllUser from './DisplayAllUser';

const Alluser = () => {
    const data = useLoaderData()

    const handledel = e => {
        fetch()
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((dt, i) => <DisplayAllUser key={dt._id} data={dt} i={i}></DisplayAllUser>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;