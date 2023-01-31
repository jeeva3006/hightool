import React from 'react';
import { useRouter } from "next/router";
import { AiOutlineBars } from 'react-icons/ai';

const header = () => {
    const { route, push } = useRouter();
    const navs = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'YouTube',
            path: '/youtube'
        },
        {
            name: 'Instagram',
            path: '/instagram'
        },
    ];

    return (
        <>
            <div className='w-full bg-black text-white'>
                <div className='w-full lg:w-[1024px] flex justify-between items-center mx-auto h-[50px] lg:px-0 px-5'>
                    <div className='text-2xl font-bold'>
                        <h1>Jee6</h1>
                    </div>
                    <div className='flex gap-x-5 text-[12px] underline'>
                        <span>Welcome to ProTags!</span>
                    </div>
                </div>
            </div>

            <div
                id='subHeader'
                className='w-full bg-[#ffffffec] border border-b transition-all sticky top-0 z-10'
            >
                <div className='w-[1024px] hidden lg:flex justify-between items-center mx-auto h-[50px]'>
                    <div className='text-[18px] font-semibold'>
                        <h1>BlackTools</h1>
                    </div>
                    <div className='flex gap-x-5'>
                        {navs.map((nav, index) =>
                            <span key={index}
                                onClick={() => push({ pathname: nav.path })}
                                className={`cursor-pointer font-semibold p-2 hover:bg-slate-100 rounded ${route === nav.path && 'text-blue-600'}`}
                            >
                                {nav.name}
                            </span>)
                        }
                    </div>
                </div>

                <div className='w-full flex lg:hidden justify-between items-center mx-auto h-[50px] px-5'>
                    <div className='text-[18px] font-semibold'>
                        <h1>ProTags</h1>
                    </div>
                    <div className='flex gap-x-5 cursor-pointer'>
                        <AiOutlineBars fontSize={20} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default header;