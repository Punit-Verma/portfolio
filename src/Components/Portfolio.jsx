import React from 'react'

const Portfolio = () => {
    return (
        <div className='h-screen w-screen flex flex-col gap-12 items-center justify-center p-24 relative'>
            <div className="flex flex-col items-center gap-4 w-full">
                <img src="/bg-decor-1.svg" alt="pointer" className='w-8 h-8' />
                <div className="flex flex-col items-center gap-4">
                    <p className='text-5xl font-bold'>Portfolio</p>
                    <p className='text-2xl uppercase font-semibold'>Recognitions & accomplishments</p>
                </div>
            </div>
            <div className="awards w-10/12 grow grid grid-cols-12 gap-12">
                <div className="col-span-12 row-span-1 grid grid-cols-12 gap-12">
                    <div className="col-span-4 grayscale hover:grayscale-0">
                        <img src="https://source.unsplash.com/600x400/?logo" alt="project-1" />
                    </div>
                    <div className="col-span-8 flex flex-col gap-8 p-3">
                        <div className="label uppercase text-white font-semibold bg-primary p-3 px-6 w-fit tracking-wide">
                            <p>art direction</p>
                        </div>
                        <div className="text-5xl flex flex-col gap-2 font-semibold">
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>consectetur adipisicing elit.</p>
                        </div>
                        <div className="action">
                            <p className='uppercase underline font-semibold cursor-pointer'>read more</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 row-span-1 grid grid-cols-12 gap-12">
                    <div className="col-span-8 flex flex-col gap-8 p-3">
                        <div className="label uppercase text-white font-semibold bg-primary p-3 px-6 w-fit tracking-wide">
                            <p>branding</p>
                        </div>
                        <div className="text-5xl flex flex-col gap-2 font-semibold">
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>consectetur adipisicing elit.</p>
                        </div>
                        <div className="action">
                            <p className='uppercase underline font-semibold cursor-pointer'>read more</p>
                        </div>
                    </div>
                    <div className="col-span-4 grayscale hover:grayscale-0">
                        <img src="https://source.unsplash.com/600x400/?code" alt="project-1" />
                    </div>
                </div>
            </div>
            <img src="/bg-decor-2.svg" alt="decor" className='absolute w-48 h-48 -left-20 -bottom-20' />
        </div>
    )
}

export default Portfolio