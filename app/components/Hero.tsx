"use client";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-[calc(100vh-80px)] px-6 pt-28 pb-14 sm:px-10 lg:px-14"
        >
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
                    <h1 className="font-fraunces text-[clamp(3rem,9vw,6rem)] leading-[0.88] font-bold text-[#EC4C4E]">
                        DARONG
                        <br />
                        SEANG
                    </h1>

                    <p className="max-w-xl text-lg text-black/90 sm:text-[2rem] sm:leading-tight lg:text-[2.2rem]">
                        Computer Science Student | Software Engineering
                    </p>

                    <div className="mt-4 flex flex-wrap justify-center gap-4 lg:justify-start">
                        <a
                            href="#projects"
                            className="min-w-28 rounded-2xl border border-black/50 px-7 py-2.5 text-base text-black transition hover:bg-black hover:text-white"
                        >
                            Project
                        </a>
                        <a
                            href="#contact"
                            className="min-w-28 rounded-2xl border border-[#EC4C4E] bg-[#EC4C4E] px-7 py-2.5 text-base text-white transition hover:bg-[#d63d3f]"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <div className="relative h-90 w-80 sm:h-107.5 sm:w-105">
                        <div className="absolute left-1/2 top-5 h-0 w-0 -translate-x-1/2 border-l-160 border-r-160 border-b-290 border-l-transparent border-r-transparent border-b-[#EC4C4E] sm:border-l-200 sm:border-r-200 sm:border-b-360" />

                        <div className="absolute left-1/2 top-16 h-70 w-70 -translate-x-1/2 overflow-hidden rounded-full border-4 border-background  sm:h-80 sm:w-80">
                            <Image
                                src="/profile.jpg"
                                alt="Darong Seang"
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}