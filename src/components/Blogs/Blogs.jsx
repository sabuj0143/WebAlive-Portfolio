import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs = useLoaderData()
    console.log(blogs);
    return (
        <div>
            <h3 className='text-center mt-4 text-4xl bg-black p-4 rounded-xl'>Blogs...</h3>
            <div className='md:grid grid-cols-3 mx-16 gap-2'>
                {
                    blogs.map(blog => <Blog
                        blog={blog}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;