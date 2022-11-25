import React from 'react';
import pic1 from '../../Shared/utilities/GIXXER 150.jpg'
import pic2 from '../../Shared/utilities/Gixxer New Edition 2019 (ABS).png'
import pic3 from '../../Shared/utilities/hero cafe racer.jpg'
import pic4 from '../../Shared/utilities/Hero Ignitor 125 cc.jpg'



const Banner = () => {
    return (
        <div>
            <div className="carousel  my-10">
                <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
                    <img src={pic1} className="h-96 " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full flex justify-center items-center">
                    <img src={pic2} className="h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full flex justify-center items-center">
                    <img src={pic3} className="h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full flex justify-center items-center">
                    <img src={pic4} className="h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;