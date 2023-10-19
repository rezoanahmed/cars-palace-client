import React from 'react';

const Customer = ({customers}) => {
    const {name, image, review} = customers;
    return (
        <div>
            <div className='p-4 w-60 bg-base-100 shadow-lg rounded-lg m-4 space-y-1'>
                <img src={image} alt="" className='h-36 w-36 rounded-full m-5 mx-auto' />
                <h1 className='font-semibold text-xl text-center'>{name}</h1>
                <p className='text-center h-24'>{review}</p>
            </div>
        </div>
    );
};

export default Customer;