import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LineFillAnimation = () => {
    useEffect(() => {
        // Create a GSAP timeline to control the order of animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.fill_trigger', // Use the first trigger to start the timeline
                start: 'top 90%',
                end: 'bottom 30%',
                scrub: true,
            },
        });

        // Select all the .fill_overly elements
        const elements = document.querySelectorAll('.fill_overly');

        // Add each animation to the timeline sequentially
        elements.forEach((el) => {
            tl.fromTo(
                el,
                {
                    opacity: '0',
                    width: '0%',
                },
                {
                    opacity: 1,
                    width: '100%',
                    ease: 'none',
                }
            );
        });
    }, []);

    return (
        <>
            <div className='fill_trigger select-none'>
                <div className="relative overflow-hidden">
                    <h4 className="fill_overly text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] absolute top-0  h-full z-10">
                        I am a <span className='text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] text-[#eb5939]'>Frontend Developer</span> with
                    </h4>
                    <h4 className="text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] opacity-20">
                        I am a <span className='text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] text-[#eb5939]'>Frontend Developer</span> with
                    </h4>
                </div>
                <div className="relative overflow-hidden mt-2">
                    <h4 className="fill_overly text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] absolute top-0  h-full z-10">
                        1.5+ years of experience in building
                    </h4>
                    <h4 className="text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] opacity-20">
                        1.5+ years of experience in building
                    </h4>
                </div>
                <div className="relative overflow-hidden mt-2">
                    <h4 className="fill_overly text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] absolute top-0  h-full z-10">
                        <span className='text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] text-[#eb5939]'>interactive</span> and modern websites with
                    </h4>
                    <h4 className="text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] opacity-20">
                        <span className='text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] text-[#eb5939]'>interactive</span> and modern websites with
                    </h4>
                </div>
                <div className="relative overflow-hidden mt-2">
                    <h4 className="fill_overly text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] absolute top-0  h-full z-10">
                        <span className='text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] text-[#eb5939]'>smooth animations.</span>
                        I specialize in
                    </h4>
                    <h4 className="text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] opacity-20">
                        <span className='text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] text-[#eb5939]'>smooth animations.</span>
                        I specialize in
                    </h4>
                </div>
                <div className="relative overflow-hidden mt-2">
                    <h4 className="fill_overly text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] absolute top-0  h-full z-10">
                        creating visually engaging
                        and <span className='text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] text-[#eb5939]'>highly</span>
                    </h4>
                    <h4 className="text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] opacity-20">
                        creating visually engaging
                        and <span className='text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] text-[#eb5939]'>highly</span>
                    </h4>
                </div>
                <div className="relative overflow-hidden mt-2">
                    <h4 className="fill_overly text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] absolute top-0  h-full z-10">
                        <span className='text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] text-[#eb5939]'>performant</span> user experiences.
                    </h4>
                    <h4 className="text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] opacity-20">
                        <span className='text-[3.75vw] leading-[3.5rem] custom_font_bold tracking-[2px] text-[#eb5939]'>performant</span> user experiences.
                    </h4>
                </div>
            </div>
        </>
    );
};

export default LineFillAnimation;
