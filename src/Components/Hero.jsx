import React from 'react'

const Hero = () => {
    const overviewSkills = [
        'design',
        'development',
        'webflow',
        'product design',
        'motion graphics',
        'figma',
        'cloud (AWS)',
        'System Applications',
        'Linux',
        'Docker',
        'CI/CD'
    ];
    return (
        <div className='grid grid-cols-12 p-6 px-24 relative'>
            <div className="col-span-8 p-12">
                <div className="flex flex-col items-start gap-8 p-16">
                    <div className="title text-7xl leading-tight uppercase font-bold">
                        <p>Hi, I'M Yash</p>
                        <p className='flex items-center justify-center'>A Creative <img src='/bg-decor-1.svg' className='ml-3 w-12 h-12 mr-3' /> Developer</p>
                        <p>Based In <span className='underline'>India</span></p>
                    </div>
                    <div className="skills-overview flex items-center justify-center text-3xl capitalize gap-4 font-semibold">
                        {overviewSkills.slice(0, 3).map((x, i) => {
                            return <div key={x + i} className='flex items-center justify-center'>
                                {i > 0 && <img src='/bg-decor-1.svg' className='w-4 h-4 mr-3' />}
                                <div>{x}</div>
                            </div>
                        })}
                    </div>
                    <div className="actions font-medium">
                        <button className='p-3 px-6 border-2 border-secondary border-r-0 bg-secondary text-white'>Got a Project?</button>
                        <button className='transition-all duration-300 p-3 px-6 border-2 border-secondary hover:bg-secondary hover:text-white'>Let's talk.</button>
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <div className="relative mt-20 flex items-center justify-center">
                <img src='/bg-decor-2.svg' alt="hero-section" className=''/>
                <img src="/person.png" alt="person" className='absolute top-0'/>
                </div>
            </div>
            <div className="marquee absolute w-[110%] -rotate-3 -bottom-20 -left-10 bg-secondary p-6 text-white overflow-hidden">
                <div className="marquee-inner flex uppercase text-xl font-semibold" style={{ animation: 'marquee 50s linear infinite', width: 'fit-content' }}>
                    {overviewSkills.map((x, i) => {
                        return <div key={x + i} className='flex shrink-0 items-center justify-center'>
                            {i > 0 && <img src='/bg-decor-1.svg' className='w-4 h-4 mx-6' />}
                            <div>{x}</div>
                        </div>
                    })}
                    {overviewSkills.map((x, i) => {
                        return (
                            <div key={x + i + 'duplicate'} className='flex shrink-0 items-center justify-center'>
                                {i > 0 && <img src='/bg-decor-1.svg' className='w-4 h-4 mx-6' />}
                                <div>{x}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Hero