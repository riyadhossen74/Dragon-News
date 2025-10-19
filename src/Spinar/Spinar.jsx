import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Spinar = () => {
    return  <div className='flex justify-center items-center min-h-screen'>
        <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </div>
};

export default Spinar;