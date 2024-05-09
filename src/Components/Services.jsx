import React from 'react'

const Services = () => {
    return (
        <div className='h-screen w-screen flex flex-col gap-12 items-center justify-center p-24 relative'>
            <div className="flex flex-col items-center gap-4 w-full">
                <img src="/bg-decor-1.svg" alt="pointer" className='w-8 h-8' />
                <div className="flex flex-col items-center gap-4">
                    <p className='text-5xl font-bold'>Services</p>
                    <p className='text-2xl uppercase font-semibold'>Recognitions & accomplishments</p>
                </div>
            </div>
            <div className="awards w-10/12 grow grid grid-cols-12 gap-8">
                <div className="col-span-6 w-full group hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer flex flex-col items-start justify-center border-2 border-secondary p-12 gap-4">
                    <p className='text-3xl font-semibold group-hover:text-primary'>Web Design</p>
                    <p className='font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tempora nulla molestias, reprehenderit, rem ratione quidem minima nostrum, nemo qui dolores quibusdam quia facere odio maxime autem quasi? Id, fugiat.</p>
                </div>
                <div className="col-span-6 w-full group hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer flex flex-col items-start justify-center border-2 border-secondary p-12 gap-4">
                    <p className='text-3xl font-semibold group-hover:text-primary'>Product Design</p>
                    <p className='font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tempora nulla molestias, reprehenderit, rem ratione quidem minima nostrum, nemo qui dolores quibusdam quia facere odio maxime autem quasi? Id, fugiat.</p>
                </div>
                <div className="col-span-6 w-full group bg-secondary text-white transition-all duration-300 cursor-pointer flex flex-col items-start justify-center border-2 border-secondary p-12 gap-4">
                    <p className='text-3xl font-semibold text-primary'>System Design</p>
                    <p className='font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tempora nulla molestias, reprehenderit, rem ratione quidem minima nostrum, nemo qui dolores quibusdam quia facere odio maxime autem quasi? Id, fugiat.</p>
                </div>
                <div className="col-span-6 w-full group hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer flex flex-col items-start justify-center border-2 border-secondary p-12 gap-4">
                    <p className='text-3xl font-semibold group-hover:text-primary'>UI/UX Design</p>
                    <p className='font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tempora nulla molestias, reprehenderit, rem ratione quidem minima nostrum, nemo qui dolores quibusdam quia facere odio maxime autem quasi? Id, fugiat.</p>
                </div>
            </div>
            <img src="/bg-decor-2.svg" alt="decor" className='absolute w-48 h-48 -left-20 -bottom-20' />
        </div>
    )
}

export default Services