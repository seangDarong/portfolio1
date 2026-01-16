"use client";
import { useEffect, useRef, useState } from "react";

export default function About() {
    const logos = [
        "https://cdn.simpleicons.org/typescript",
        "https://cdn.simpleicons.org/react",
        "https://cdn.simpleicons.org/nextdotjs",
        "https://cdn.simpleicons.org/tailwindcss",
        "https://cdn.simpleicons.org/javascript",
        "https://cdn.simpleicons.org/dart",
        "https://cdn.simpleicons.org/c",
        "https://cdn.simpleicons.org/git",
        "https://cdn.simpleicons.org/github",
        "https://cdn.simpleicons.org/javascript",
        "https://cdn.simpleicons.org/c++",
        "https://cdn.simpleicons.org/flutter",
        "https://cdn.simpleicons.org/express",
        "https://cdn.simpleicons.org/mysql",
        "https://cdn.simpleicons.org/postgresql",
    ];

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        let rafId = 0;
        let lastTime = performance.now();
        const speed = 40; // pixels per second

        function step(now: number) {
            const dt = now - lastTime;
            lastTime = now;
            if (!isPaused) {
                el!.scrollLeft += (speed * dt) / 1000;

                // Reset scroll position seamlessly when we reach halfway
                const half = el!.scrollWidth / 2;
                if (el!.scrollLeft >= half) {
                    el!.scrollLeft = el!.scrollLeft - half;
                }
            }
            rafId = requestAnimationFrame(step);
        }

        rafId = requestAnimationFrame(step);

        
        function onPointerEnter() {
            setIsPaused(true);
        }
        function onPointerLeave() {
            setIsPaused(false);
        }
        function onPointerDown() {
            setIsPaused(true);
        }
        function onPointerUp() {
            setIsPaused(false);
        }
        function onWheel() {
            setIsPaused(true);
            window.clearTimeout((onWheel as any)._t);
            (onWheel as any)._t = window.setTimeout(() => setIsPaused(false), 1000);
        }

        el.addEventListener("mouseenter", onPointerEnter);
        el.addEventListener("mouseleave", onPointerLeave);
        el.addEventListener("pointerdown", onPointerDown);
        window.addEventListener("pointerup", onPointerUp);
        el.addEventListener("wheel", onWheel, { passive: true });

        return () => {
            cancelAnimationFrame(rafId);
            el.removeEventListener("mouseenter", onPointerEnter);
            el.removeEventListener("mouseleave", onPointerLeave);
            el.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointerup", onPointerUp);
            el.removeEventListener("wheel", onWheel as EventListener);
        };
    }, [isPaused]);
    
    return (
        <section id="/about" 
        className="flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 sm:py-20 bg-[#f7f7ef] gap-8">
            <div className="w-full max-w-7xl">
                <div className="flex flex-col lg:flex-col items-end justify-between gap-8 mb-12">
                    <div className="w-full lg:w-1/2">
                        <h2 className="font-fraunces text-[clamp(2.5rem,8vw,4rem)] lg:text-[64px] leading-[0.9] font-bold text-[#EC4C4E] text-center lg:text-right">
                            About Me
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-1/2 max-w-xl">
                        <p className="text-base sm:text-lg text-black/90 text-center lg:text-right">
                            I am a Computer Science student specializing in software engineering with a passion for building clean, intuitive applications and exploring emerging technologies.
                        </p>
                    </div>
                </div>

                
                <div className="w-full">
                    <h3 className="font-fraunces text-[clamp(2rem,6vw,3rem)] lg:text-[48px] font-bold text-[#EC4C4E] text-center lg:text-left mb-6">
                        Technologies
                    </h3>
                    
                    
                    <div
                        ref={containerRef}
                        className="overflow-x-auto no-scrollbar flex gap-6 py-6 cursor-grab active:cursor-grabbing"
                        style={{ scrollBehavior: "auto" }}
                    >
                        {/* Duplicate logos for seamless infinite scroll */}
                        {[...logos, ...logos].map((src, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[100px] h-[100px] rounded-lg flex items-center justify-center overflow-hidden"
                            >
                                <img 
                                    src={src} 
                                    alt={`Technology ${index % logos.length + 1}`}
                                    className="w-full h-full object-cover"
                                    draggable="false"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    )
}