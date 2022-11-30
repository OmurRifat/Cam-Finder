import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Categories = () => {
    const datas = useLoaderData();
    // console.log(datas[0])
    return (
        <div className='my-20 w-4/5 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-6'>
                {
                    datas.map(data => <Category
                        key={ data._id }
                        data={ data }
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;