"use client";
import Image from "next/image";

export default function About() {
    const logos = [
        "typescript",
        "react",
        "nextdotjs",
        "tailwindcss",
        "javascript",
        "dart",
        "c",
        "git",
        "github",
        "cplusplus",
        "flutter",
        "express",
        "mysql",
        "postgresql",
    ];

    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center gap-8 bg-[#f7f7ef] px-6 py-16 text-center sm:px-10 sm:py-20"
        >
            <div className="w-full max-w-7xl">
                <div className="mb-12 flex flex-col items-end justify-between gap-8 lg:flex-col">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-center font-fraunces text-[clamp(2.5rem,8vw,4rem)] font-bold leading-[0.9] text-[#EC4C4E] lg:text-right lg:text-[64px]">
                            About Me
                        </h2>
                    </div>

                    <div className="flex w-full max-w-xl flex-col gap-4 sm:gap-6 lg:w-1/2">
                        <p className="text-center text-base text-black/90 sm:text-lg lg:text-right">
                            I am a Computer Science student specializing in software engineering with a passion for building clean,
                            intuitive applications and exploring emerging technologies.
                        </p>
                    </div>
                </div>

                <div className="w-full">
                    <h3 className="mb-6 text-center font-fraunces text-[clamp(2rem,6vw,3rem)] font-bold text-[#EC4C4E] lg:text-left lg:text-[48px]">
                        Technologies
                    </h3>

                    <div className="logo-marquee group relative overflow-hidden py-4">
                        <div className="logo-track flex w-max gap-6 group-hover:[animation-play-state:paused]">
                            {[...logos, ...logos].map((name, index) => (
                                <div
                                    key={`${name}-${index}`}
                                    className="flex h-23.5 w-23.5 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
                                >
                                    <Image
                                        src={`https://cdn.simpleicons.org/${name}`}
                                        alt={name}
                                        width={62}
                                        height={62}
                                        className="h-15.5 w-15.5 object-contain"
                                        unoptimized
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .logo-marquee::before,
                .logo-marquee::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    z-index: 2;
                    width: 12%;
                    height: 100%;
                    pointer-events: none;
                }

                .logo-marquee::before {
                    left: 0;
                    background: linear-gradient(to right, #f7f7ef 10%, transparent);
                }

                .logo-marquee::after {
                    right: 0;
                    background: linear-gradient(to left, #f7f7ef 10%, transparent);
                }

                .logo-track {
                    animation: marquee 30s linear infinite;
                }

                @keyframes marquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(calc(-50% - 0.75rem));
                    }
                }
            `}</style>
        </section>
    );
}