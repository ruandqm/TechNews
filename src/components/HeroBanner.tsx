import React from 'react'

export default function HeroBanner() {
    return (
        <section className="relative px-12 py-[25vh] bg-[url('/hero-banner.png')] bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950"></div>
            <div className="absolute left-0 z-10 w-full text-center mx-auto">
                <h1 className="font-semibold text-4xl md:text-7xl">The best Tech News!</h1>
                <span className="text-lg md:text-2xl">Connecting you to the tech world</span>
            </div>

        </section>
    )
}