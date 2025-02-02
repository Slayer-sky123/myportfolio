import React from 'react'
import heroVid from '/videos/hero.mp4'

const Home = () => {
    return (
        <main>
            <section>
                <div className="relative">
                    <div className="content_overly absolute top-0 left-0 z-10 w-full h-full bg-transparent grid grid-cols-12">
                        <div className='col-span-4'></div>
                        <div className='col-span-4 flex flex-col items-center justify-center gap-y-4'>
                            <h6 className='text-center text-sm text-[#b7ab98] uppercase tracking-[6px] font-extralight'>Minh Famh</h6>
                            <h1 className='text-[7rem] font-medium leading-[5.6rem] text-[#b7ab98] uppercase text-center'>Making <span className='text-[#eb5939]'>Good Shit</span> Since 2009</h1>
                        </div>
                        <div className='col-span-4'></div>
                    </div>
                    <video className="h-screen w-full object-cover" src={heroVid} loop autoPlay muted></video>
                </div>
            </section>
        </main>
    )
}

export default Home
