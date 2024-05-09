import React from 'react';
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Awards = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 3]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <motion.div className='h-screen w-screen flex flex-col gap-8 items-center justify-center p-24 relative'>
            <div className="flex flex-col items-center gap-4 w-full">
                <img src="/bg-decor-1.svg" alt="pointer" className='w-8 h-8' />
                <div className="flex flex-col items-center gap-4">
                    <p className='text-5xl font-bold'>Awards</p>
                    <p className='text-2xl uppercase font-semibold'>Recognitions & accomplishments</p>
                </div>
            </div>
            <div className="awards w-10/12 grow flex flex-col items-center justify-center gap-8">
                <div className="w-full group hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center border-2 border-secondary p-12 gap-8">
                    <div className="group-hover:bg-primary w-12 h-12 text-xl font-semibold bg-secondary flex items-center justify-center text-white">
                        <p>1</p>
                    </div>
                    <div className="grow flex flex-col gap-1">
                        <p className='text-3xl capitalize font-semibold'>AIGA modern painting award jump</p>
                        <p className='font-semibold'>Runner up - "Decor of the week"</p>
                    </div>
                    <div className="flex uppercase gap-4 font-semibold">
                        <p>product design</p>
                        <p className='group-hover:text-primary'>2021</p>
                    </div>
                </div>
                <div className="w-full group hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center border-2 border-secondary p-12 gap-8">
                    <div className="group-hover:bg-primary w-12 h-12 text-xl font-semibold bg-secondary flex items-center justify-center text-white">
                        <p>2</p>
                    </div>
                    <div className="grow flex flex-col gap-1">
                        <p className='text-3xl capitalize font-semibold'>AIGA modern painting award jump</p>
                        <p className='font-semibold'>Runner up - "Decor of the week"</p>
                    </div>
                    <div className="flex uppercase gap-4 font-semibold">
                        <p>product design</p>
                        <p className='group-hover:text-primary'>2021</p>
                    </div>
                </div>
                <div className="w-full bg-secondary text-white transition-all duration-300 cursor-pointer flex items-center justify-center border-2 border-secondary p-12 gap-8">
                    <div className="bg-primary w-12 h-12 text-xl font-semibold flex items-center justify-center text-white">
                        <p>3</p>
                    </div>
                    <div className="grow flex flex-col gap-1">
                        <p className='text-3xl capitalize font-semibold'>AIGA modern painting award jump</p>
                        <p className='font-semibold'>Runner up - "Decor of the week"</p>
                    </div>
                    <div className="flex uppercase gap-4 font-semibold">
                        <p>product design</p>
                        <p className='text-primary'>2021</p>
                    </div>
                </div>
            </div>
            {/* Animate the rotation of the image */}
            <motion.img style={{ scale, rotate }} src="/bg-decor-1.svg" alt="decor" className='absolute w-48 h-48 -right-20' />
        </motion.div>
    )
}

export default Awards;
