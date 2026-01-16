"use client";
import Image from "next/image";

export default function Hero() {
    
    return (
        <section id="/hero" 
        className="min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-4 sm:px-8 pt-20 pb-8 lg:pt-20 lg:pb-12 bg-[#f7f7ef] gap-8 lg:gap-12 ">
            <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-1/2 max-w-xl">
                <h1 className="font-fraunces text-[clamp(2.5rem,10vw,4rem)] lg:text-[64px] leading-[0.9] font-bold text-[#EC4C4E]">
                    DARONG
                    <br />
                    SEANG
                </h1>

                <p className="text-base sm:text-lg text-black/90">Computer Science Student | Software Engineering</p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-4 sm:mt-6">
                    <button className="px-5 sm:px-6 py-2 text-sm sm:text-base rounded-full border-2 border-neutral-800 bg-transparent text-neutral-800 transition-all duration-300 hover:bg-neutral-800 hover:text-white hover:scale-105 hover:shadow-lg">Project</button>
                    <button className="px-5 sm:px-6 py-2 text-sm sm:text-base rounded-full bg-[#EC4C4E] text-white shadow-md transition-all duration-300 hover:bg-[#d63d3f] hover:scale-105 hover:shadow-xl">Contact</button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[420px] aspect-square flex items-center justify-center">
                    
                    <svg
                        viewBox="0 0 558 558"
                        className="absolute inset-0 w-full h-full"
                        preserveAspectRatio="xMidYMid meet"
                        >
                        <defs>
                            <mask id="triangleMask">
                                <rect width="558" height="558" fill="white" />
                                <circle cx="279" cy="350" r="175" fill="black" />
                            </mask>
                        </defs>
                        <polygon
                            points="279,0 0,558 558,558"
                            fill="#EC4C4E"
                            mask="url(#triangleMask)"
                        />
                    </svg>

                    <div className="absolute rounded-full overflow-hidden w-[61%] h-[61%] shadow-lg z-10 top-[32.3%]">
                        <Image src="/profile.jpg" alt="profile" width={340} height={340} className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}