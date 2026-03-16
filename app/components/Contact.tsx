
"use client";

import { FormEvent, useState } from "react";

const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/seang.darong.54/",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                <path d="M13.5 9H16V6h-2.5C10.9 6 9 7.9 9 10.5V13H7v3h2v6h3v-6h2.3l.7-3H12v-2.5c0-.8.7-1.5 1.5-1.5Z" />
            </svg>
        ),
    },
    {
        name: "Telegram",
        href: "https://t.me/darongseang",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                <path d="M21.9 4.3a1.2 1.2 0 0 0-1.2-.2L3.2 10.7a1.1 1.1 0 0 0 .1 2.1l4.2 1.3 1.6 4.8c.2.7 1.2.9 1.7.3l2.3-2.8 4.2 3.1c.7.5 1.7.1 1.9-.8L22 5.3c.1-.4 0-.8-.1-1ZM9.6 13.6l8.5-6.8-6.8 8.3-.2 2.1-1.5-3.6Z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/darong-seang-9a90a92a7/",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                <path d="M6.9 8.2a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM5 10h3.8v9.8H5V10Zm6 0H14v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v5.4h-3.8v-4.8c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6v4.9H11V10Z" />
            </svg>
        ),
    },
    {
        name: "GitHub",
        href: "https://github.com/seangDarong",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                <path d="M12 2.3a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.5-1.2-3.5-1.2-.4-1.1-1-1.4-1-1.4-.9-.6 0-.6 0-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.3-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.8-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.5.1 2.7.7.8 1 1.7 1 2.8 0 3.7-2.3 4.5-4.5 4.8.4.4.7 1 .7 2.1V21c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.3Z" />
            </svg>
        ),
    },
];

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const finalSubject = subject.trim() || `Portfolio message from ${name || "Visitor"}`;
        const body = [
            `Name: ${name || "Not provided"}`,
            `Email: ${email || "Not provided"}`,
            "",
            message || "No message content.",
        ].join("\n");

        const mailtoLink = `mailto:darong6126@gmail.com?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    }

    return (
        <section id="contact" className="bg-[#f7f7ef] px-6 py-20 sm:px-10 lg:px-14">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-6">
                    <h2 className="font-fraunces text-[clamp(2.4rem,7vw,4.2rem)] font-bold leading-[0.92] text-[#EC4C4E]">
                        Contact
                    </h2>
                    <p className="max-w-xl text-base text-black/80 sm:text-lg">
                        Feel free to connect with me on social media, send me an email, or download my CV.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                title={social.name}
                                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/15 bg-white text-black transition hover:-translate-y-0.5 hover:border-[#EC4C4E] hover:text-[#EC4C4E]"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <a
                        href="/Seang_Darong-CV.pdf"
                        download
                        className="inline-flex rounded-2xl border border-[#EC4C4E] bg-[#EC4C4E] px-6 py-2.5 text-base text-white transition hover:bg-[#d63d3f]"
                    >
                        Download CV
                    </a>
                </div>

                <form
                    onSubmit={sendEmail}
                    className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:p-8"
                >
                    <h3 className="mb-5 font-fraunces text-3xl font-bold text-black">Send Email</h3>

                    <div className="space-y-4">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="w-full rounded-xl border border-black/20 px-4 py-3 outline-none transition focus:border-[#EC4C4E]"
                        />

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email"
                            required
                            className="w-full rounded-xl border border-black/20 px-4 py-3 outline-none transition focus:border-[#EC4C4E]"
                        />

                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Subject"
                            className="w-full rounded-xl border border-black/20 px-4 py-3 outline-none transition focus:border-[#EC4C4E]"
                        />

                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Currently in development <contact me at> darong6126@gmail.com"
                            required
                            rows={6}
                            className="w-full resize-none rounded-xl border border-black/20 px-4 py-3 outline-none transition focus:border-[#EC4C4E]"
                        />

                        <button
                            type="submit"
                            className="w-full rounded-2xl border border-[#EC4C4E] bg-[#EC4C4E] px-6 py-3 text-base text-white transition hover:bg-[#d63d3f]"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}