import React from 'react'
import heroVid from '/videos/hero.mp4'
import LineFillAnimation from './components/TextFill'

const Home = () => {
    return (
        <main>
            {/* social icons */}
            <ul className='fixed bottom-11 start-16 z-50 flex flex-col gap-y-5'>
                <li>
                    <a target='_blank' href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </a>
                </li>
                <li>
                    <a target='_blank' href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                </li>
            </ul>
            <section className='pt-6'>
                <div className="relative">
                    <div className="content_overly absolute top-0 left-0 z-10 w-full h-full bg-transparent grid grid-cols-12">
                        <div className='col-span-4'></div>
                        <div className='col-span-4 flex flex-col items-center justify-center gap-y-4'>
                            <h6 className='text-center text-[1vw] text-[#b7ab98] uppercase tracking-[6px] font-extralight custom_font_bold'>Minh Famh</h6>
                            <h1 className='text-[8.5vw] font-medium leading-[6.9vw] text-[#b7ab98] uppercase text-center custom_font_bold'>Making <span className='text-[#eb5939] custom_font_bold'>Good Shit</span> Since 2009</h1>
                        </div>
                        <div className='col-span-4'></div>
                    </div>
                    <video className="h-screen w-full object-cover" src={heroVid} loop autoPlay muted></video>
                </div>
            </section>
            <section>
                <div className='container mx-auto lg:px-16 py-32'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-1 hidden md:block'></div>
                        <div className='col-span-10'>
                            <h6 className='text-xs text-[#b7ab98] uppercase tracking-[6px] font-extralight custom_font_bold mb-6'>About Me</h6>
                            {/* <h4 className='text-5xl custom_font_bold tracking-[3px]'>
                                I am a Product Designer with 7+ years of
                                experience in UI/UX design. I’ve had the chance
                                to work with top global brands, designing
                                experiences that have impacted over 5 million
                                active users worldwide.
                            </h4> */}
                            <LineFillAnimation />
                        </div>
                        <div className='col-span-1 hidden md:block'></div>
                    </div>
                </div>
            </section>
            <section className='h-screen'>

            </section>
        </main>
    )
}

export default Home
