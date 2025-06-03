'use client'
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function OzluSoz() {

    const { ref: scrollTrigger, inView: isInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isInView) {
            setVisible(true);
        }
    }, [isInView]);

    return (
        <div ref={scrollTrigger} className={` ${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 ease-in-out`}>
            <div className="w-full h-[750px] bg-[url(/law1.jpg)] bg-cover">
                <div className="w-full h-full bg-background/60 flex flex-col gap-8 justify-center items-center">
                    <p className="text-3xl font-montserrat">"Avukat, yurttaşın devlete karşı güvencesidir; onun varlığı, hakkın sessiz kalmamasıdır."</p>
                    <p className="text-2xl font-montserrat"> - Av. Turgut Kazan, Savunma Hakkı ve Hukukun Üstünlüğü -</p>
                </div>
            </div>
        </div>
    )
}

export default OzluSoz