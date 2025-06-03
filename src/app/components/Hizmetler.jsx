'use client'
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { GoLaw } from "react-icons/go";
import { MdBusinessCenter } from "react-icons/md";
import { RiNewspaperLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Hizmetler() {
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
        <div>
            <div ref={scrollTrigger} className="w-full bg-second-color p-16 pb-64 pt-64 font-montserrat">
                <h3 className={`text-6xl font-playfair ${move && visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} transition-all duration-[1.7s] ease-in-out `}>HİZMETLERİM</h3>

                <p className={`mt-6 ${move && visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} transition-all duration-[1.7s] ease-in-out `}>Hukuki ihtiyaçlarınızı hassasiyet ve uzmanlıkla karşılamak üzere tasarlanmış kapsamlı hizmetlerimizi keşfedin.</p>
                <div className={`grid grid-cols-3 gap-16 mt-16 content-center ${visible ? "opacity-100" : "opacity-0"}  transition-opacity duration-[1.7s] ease-in-out`}>
                    <div className="w-auto h-72 row-span-2">
                    </div>
                    <div className="w-auto p-16 rounded-2xl h-72 text-center border-4 border-b-0 border-r-0
                    hover:bg-white hover:border-white hover:text-background transition-colors duration-1000">
                        <MdBusinessCenter className="w-full text-6xl text-center" />
                        <h2 className="text-2xl mb-6"> İş Hukuku </h2>
                        <p className="leading-relaxed">İşe iade davaları, kıdem tazminatı, mobbing ve haksız işten çıkarma süreçleri.</p>
                    </div>
                    <div className="w-auto p-16 rounded-2xl h-72 text-center border-4 border-l-0 border-b-0
                     hover:bg-white hover:border-white hover:text-background transition-colors duration-1000">
                        <RiNewspaperLine className="w-full text-6xl text-center" />
                        <h2 className="text-2xl mb-6"> Vergi Hukuku </h2>
                        <p className="leading-relaxed"> Vergi cezalarına itiraz, uzlaşma süreçleri ve vergi davaları.</p>
                    </div>
                    <div className="w-auto p-16 rounded-2xl h-72 text-center border-4  border-t-0 border-r-0
                     hover:bg-white hover:border-white hover:text-background transition-colors duration-1000">
                        <GoLaw className="w-full text-6xl text-center" />
                        <h2 className="text-2xl mb-6"> Ceza Hukuku </h2>
                        <p className="leading-relaxed"> Haksız suçlamalara karşı savunma, mağdur hakları ve ceza davalarında temsil. </p>
                    </div>
                    <div className="w-auto p-16 rounded-2xl h-72 text-center border-4 border-l-0 border-t-0
                     hover:bg-white hover:border-white hover:text-background transition-colors duration-1000">
                        <HiMiniBuildingLibrary className="w-full text-6xl text-center" />
                        <h2 className="text-2xl mb-6"> İdare Hukuku </h2>
                        <p className="leading-relaxed">İdari işlemlere itiraz, memur davaları, disiplin cezaları ve iptal davalarında hukuki destek.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hizmetler