import React from 'react';

const Services = () => {
    return (
        <div>
            <h1 className='text-center mt-4 text-4xl bg-black p-4 rounded-xl'>Our Services</h1>
            <div className='md:grid grid-cols-3 gap-4 mx-24 mt-10'>
                <div className='p-6  bg-gray-400 rounded-lg text-black '>
                    <h4 className='font-semibold text-2xl mb-2'>Development</h4>
                    <hr />
                    <p><small>Partner with our experienced team and develop robust software application, whether you're a start-up or an established business looking to outshine with innovative ideas!</small></p>
                </div>
                <div className='p-6 bg-gray-400 rounded-lg text-black'>
                    <h4 className='font-semibold text-2xl mb-2'>Website</h4>
                    <hr />
                    <p><small>Looking to build a new website or transform an existing one that isn't performing? We create engaging websites that offer the very best in user experience and drive enquiries.</small></p>
                </div>
                <div className='p-6  bg-gray-400 rounded-lg text-black'>
                    <h4 className='font-semibold text-2xl mb-2'>Ecommerce</h4>
                    <hr />
                    <p><small>Feature-rich and conversion-optimised, our eCommerce websites along with our industry leading experience give you the control needed to grow your business.</small></p>
                </div>
            </div>
        </div>
    );
};

export default Services;