import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../Context/Context';

const AddProduct = () => {
    const { user } = useContext(authContext)
    const [select, setselect] = useState('')

    const handleSub = (e) => {
        e.preventDefault()
        const form = e.target
        const item = form.item.value
        const location = form.location.value
        const seller = form.seller.value
        const select = form.select.value
        const image = form.file.files[0]
        const newPrice = form.newPrice.value
        const resale = form.resale.value
        const time = form.time.value
        // console.log(time, item, location, seller, newPrice, resale, select);

        const formData = new FormData()
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb}`

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log("image", data);
                const imageUrl = data.data.url;
                const ProductInfo = {
                    item: item,
                    location: location,
                    seller: seller,
                    catagory: select,
                    img: imageUrl,
                    email: user?.email,
                    newPrice: newPrice,
                    resale: resale,
                    time: time
                }
                console.log(ProductInfo);
                fetch('https://assignment-12-server-theta-orcin.vercel.app/product', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(ProductInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.acknowledged)
                            toast.success('product added successfully')
                        console.log(data);
                    })
                    .then(err => console.error(err))
            })


    }







    return (
        <div>
            <h1 className='text-center text-2xl font-semibold'>Add Product Here</h1>
            <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl  container mx-auto">
                <div>
                    <form onSubmit={handleSub} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item name</span>
                            </label>
                            <input name='item' type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input name='location' type="text" placeholder="location" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">seller Name</span>
                            </label>
                            <input name='seller' type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input name='file' type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">New price</span>
                            </label>
                            <input name='newPrice' type="text" placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resale price</span>
                            </label>
                            <input name='resale' type="text" placeholder=" Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Used time</span>
                            </label>
                            <input name='time' type="text" placeholder="Time" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Catagory</span>
                            </label>
                            <select name="select" className="select select-accent w-full max-w-xs">
                                <option disabled selected>Select Your catagory?</option>
                                <option value="Hero">Hero</option>
                                <option value="Yamaha">Yamaha</option>
                                <option value="Gixxer">Gixxer</option>
                                <option value="Pulser">Pulser</option>
                            </select>
                        </div>
                        <button className='btn' type="submit">Add Product</button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default AddProduct;