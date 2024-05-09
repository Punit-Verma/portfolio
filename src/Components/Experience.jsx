import React from 'react';

const Experience = () => {
    const name = { first: "punit", last: "verma" };
    const data = {
        experience: "I have worked on Shopify, Chargebee, various payment gateways, and have over 5 years of experience in PHP. Additionally, I have extensive experience with AWS services such as Node.js, Lambda with Python, dynamic API Gateway, and CDK.",
        birthPlace: "Earth",
        yearsExperience: "7+",
        dateOfBirth: "28 Sep xxxx",
        projectsCompleted: "50+",
        happyClients: "30+"
    };

    return (
        <div className='mt-48 h-screen w-screen grid grid-cols-12 p-48'>
            <div className="col-span-4 font-semibold flex flex-col gap-4">
                <div className="text-3xl flex items-center uppercase">
                    <p>{name.first}</p>
                    <img src='/bg-decor-1.svg' className='w-4 h-4 mx-2' alt="decor" />
                    <p>{name.last}</p>
                </div>
                <div className="capitalize font-bold text-6xl leading-tight">
                    <p>Best Creative</p>
                    <p>and modern</p>
                    <p>resume</p>
                </div>
            </div>
            <div className="col-span-8 flex flex-col gap-8">
                <p className='text-xl leading-tight font-semibold text-justify'>{data.experience}</p>
                <div className="exp uppercase font-bold flex items-center justify-between">
                    <div className="text-sm flex flex-col gap-2">
                        <p className='font-semibold text-primary'>born in</p>
                        <p className='text-3xl'>{data.birthPlace}</p>
                    </div>
                    <div className="text-sm flex flex-col gap-2">
                        <p className='font-semibold text-primary'>Experience</p>
                        <p className='text-3xl'>{data.yearsExperience} years</p>
                    </div>
                    <div className="text-sm flex flex-col gap-2">
                        <p className='font-semibold text-primary'>Date of birth</p>
                        <p className='text-3xl'>{data.dateOfBirth}</p>
                    </div>
                </div>
            </div>
            <div className="col-span-12 mt-24 flex items-center justify-center uppercase relative">
                <div className="p-12 flex flex-col gap-4 items-center justify-center border-2 border-secondary grow font-semibold">
                    <p className='text-5xl font-bold'>{data.yearsExperience}</p>
                    <p>years of experience</p>
                </div>
                <div className="p-12 flex flex-col gap-4 items-center justify-center border-2 border-secondary border-x-0 bg-secondary text-white grow font-semibold">
                    <p className='text-5xl font-bold'>{data.projectsCompleted}</p>
                    <p>projects completed</p>
                </div>
                <div className="p-12 flex flex-col gap-4 items-center justify-center border-2 border-secondary grow font-semibold">
                    <p className='text-5xl font-bold'>{data.happyClients}</p>
                    <p>happy clients</p>
                </div>
                <img src="/bg-decor-2.svg" alt="decor" className='absolute -z-10 rotate-12 scale-150 opacity-30 -right-96 bottom-96'/>
            </div>
        </div>
    );
};

export default Experience;
