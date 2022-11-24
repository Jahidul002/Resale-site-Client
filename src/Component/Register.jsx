import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { authContext } from '../Context/Context';

const Register = () => {
    const { creatUser, UpdtUserProfile } = useContext(authContext)




    const handleSub = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const image = form.file.files[0]
        const email = form.email.value
        const pass = form.password.value
        // const select = e.target.select.value
        const formData = new FormData()
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb}`

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const imageUrl = data.data.display_url;
                creatUser(email, pass)
                    .then(res => {
                        const user = res.user
                        console.log(user);
                        handleProfile(name, imageUrl)

                        // data for user backend
                        const userInfo = {
                            name: name,
                            photo: imageUrl,
                            email: email,
                            // select: select
                        }

                    })
                    .then(err => console.error(err))
            })
    }

    const handleProfile = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url
        }
        UpdtUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }





    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Regi now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSub} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input name='file' type="file" className="file-input file-input-ghost w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <select className="select select-secondary w-full max-w-xs">
                                    <option disabled selected>Register as</option>
                                    <option>seller</option>
                                    <option>Buyer</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;