import React, { Suspense } from 'react';
import Categories from '../Categories';
import Spinar from '../../Spinar/Spinar';

const LeftAside = () => {
    return (
        <div>
           <Suspense fallback={<Spinar></Spinar>}>
            <Categories></Categories>
           </Suspense>
        </div>
    );
};

export default LeftAside;