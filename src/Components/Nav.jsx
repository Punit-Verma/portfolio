import React from 'react'

const Nav = () => {
    const items = ['Home', 'About', 'Works', 'Contact'];
    return (
        <div className='p-6 px-12 flex items-center justify-center'>
            <div className="logo flex items-center justify-center">
                <img src='/bg-decor-1.svg' className='w-6 h-6 mr-3' />
                <p className='text-2xl font-semibold'>Yash-Folio</p>
            </div>
            <div className="items font-semibold flex grow items-center justify-center gap-8">
                {items.map((x, i) => <div className='cursor-pointer' key={i + x}>{x}</div>)}
            </div>
            <div className="actions">
                <button className='font-medium btn-primary border-2 border-secondary px-6 py-2 hover:bg-secondary hover:text-white transition-all'>Let's Talk</button>
            </div>
        </div>
    )
}

export default Nav