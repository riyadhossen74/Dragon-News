import React from 'react';
import SocalLogin from './SocalLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
           <SocalLogin></SocalLogin>
           <FindUs></FindUs>
           <Qzone></Qzone>
        </div>
    );
};

export default RightAside;