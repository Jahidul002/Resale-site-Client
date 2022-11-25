import React from 'react';
import Catagory from '../../Component/Catagory';
import DetailsBloG1 from '../../Component/DetailsBloG1';
import DetailsBloG2 from '../../Component/DetailsBloG2';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <DetailsBloG1></DetailsBloG1>
            <DetailsBloG2></DetailsBloG2>
            <Catagory></Catagory>
        </div>
    );
};

export default Home;