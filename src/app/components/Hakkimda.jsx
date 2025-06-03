'use client'
import Image from "next/image"
import { PiCursorClickFill } from "react-icons/pi";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Hakkimda() {

    const { ref: scrollTrigger, inView: isInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const [visible, setVisible] = useState(false);
    const [move, setMove] = useState(false);


    useEffect(() => {
        if (isInView) {
            setVisible(true);
            setMove(true);
        }
    }, [isInView]);

    return (
        <div ref={scrollTrigger} className={`transition-opacity duration-[2s] ease-in-out ${visible ? "opacity-100" : "opacity-0"
            }`}>
            <div className="w-full h-auto flex justify-between p-16 pt-64 pb-64 overflow-hidden">
                <div className={`font-montserrat transition-all duration-1000 ease-in-out ${move ? "translate-x-0" : "-translate-x-full"}`}>
                    <h3 className="text-6xl font-playfair">HAKKIMDA</h3>
                    <p className="text-xl w-[600px] pt-8  leading-relaxed">Ben Av. Elif Demir. Marmara Üniversitesi Hukuk Fakültesi mezunuyum. İstanbul Barosu’na bağlı olarak serbest avukatlık yapmaktayım. Müvekkillerime başta aile hukuku, ceza hukuku ve iş hukuku olmak üzere birçok alanda profesyonel hukuki destek sunuyorum. Önceliğim, müvekkillerimin haklarını en etkin şekilde savunmaktır.</p>
                    <button className="hover:cursor-pointer border-[1px] border-white p-4 pr-6 pl-6 mt-8 text-center">
                        <span className="flex flex-col items-center">
                            Dahası için<PiCursorClickFill />
                        </span>
                    </button>
                </div>

                <div className={`transition-all duration-[1.5s] ease-in-out ${move ? "translate-x-0" : "translate-x-full"} 
                ${visible ? "opacity-100" : "opacity-0"}`}>
                    <Image src="/elif-demir.jpg" width={700} height={500} alt="Av. Elif Demir"></Image>
                </div>
            </div>
        </div>
    )
}

export default Hakkimda