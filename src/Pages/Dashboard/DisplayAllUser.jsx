import React from 'react';

const DisplayAllUser = ({ data, i }) => {
    const { name, email, role, _id } = data
    const handledel = id => {
        const agree = window.confirm(`are you sure delete ${name}`)
        if (agree)
            fetch(`https://assignment-12-server-theta-orcin.vercel.app/user/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    window.location.reload()
                })
    }

    return (
        <tr>
            <th>{i + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{role}</td>
            <td><button onClick={() => handledel(_id)} className='btn btn-xs  btn-xs hover:text-red-600'>X</button></td>
        </tr>
    );
};

export default DisplayAllUser;