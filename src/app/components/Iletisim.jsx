function Iletisim() {
    return (
        <div>
            <div className="w-full pt-64 pb-64 p-16">
                <h2 className="text-6xl font-playfair w-full text-center">İLETİŞİM</h2>
                <div className="flex flex-col justify-center items-center font-montserrat mt-16 gap-16">
                    <div className="flex gap-16">
                        <div>
                            <h6>İsim*</h6>
                            <input type="text" className="border-b-[1px]" />
                        </div>
                        <div>
                            <h6>Soyisim*</h6>
                            <input type="text" className="border-b-[1px] " />
                        </div>
                    </div>
                    <div className="flex gap-16">
                        <div>
                            <h6>Email*</h6>
                            <input type="email" className="border-b-[1px]" />
                        </div>
                        <div>
                            <h6>Telefon*</h6>
                            <input type="tel" className="border-b-[1px]" />
                        </div>
                    </div>
                    <div className="flex flex-col w-[460px]">
                        <h6>Mesajınız*</h6>
                        <input type="text" className="w-full border-b-[1px] active:border-0" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Iletisim