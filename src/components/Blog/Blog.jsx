import React from 'react';

const Blog = ({ blog }) => {
    const { img, name, mints, title } = blog;
    return (
        <div className='mt-20  bg-slate-400 p-4 rounded-xl'>
            <img className='h-64 rounded-xl' src={img} alt="" />
            <h3 className='mt-6 text-2xl text-black'>Name : {name}</h3>
            <p className=' text-black'>{title}</p>
            <p className='mt-4 text-blue-500'>Read Time: {mints}</p>
        </div>
    );
};

export default Blog;