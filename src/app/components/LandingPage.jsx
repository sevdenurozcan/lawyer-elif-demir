'use client'
import React from 'react'
import { useState, useEffect } from 'react'

function LandingPage() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div>
            <div className={`w-full h-[750px] bg-[url(/landing-page.jpg)] bg-cover bg-no-repeat bg-top transition-opacity duration-1000 ease-out ${show ? 'opacity-100' : 'opacity-0'
                }`}>
                <div className="w-full h-[750px] flex flex-col items-center justify-center gap-16 bg-background/60">
                    <h1 className="text-8xl font-playfair">AV. ELİF DEMİR</h1>
                    <h3 className="text-4xl font-montserrat">Hukukta Yol Arkadaşınız</h3>
                    <button className="hover:cursor-pointer border-white border-[1px] p-4 pr-6 pl-6">Randevu Al</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage