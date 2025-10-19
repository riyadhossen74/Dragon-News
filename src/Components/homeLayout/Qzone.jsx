import React from 'react';
import swming from '../../assets/swimming.png'
import Playgorund from '../../assets/playground.png'
import classs from '../../assets/class.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-5'>
           <h2 className='font-bold py-5'>Q-Zone</h2> 
           <div className='space-y-10'>
            <img src={swming} alt="" />
            <img src={classs} alt="" />
            <img src={Playgorund} alt="" />
           </div>
        </div>
    );
};

export default Qzone;