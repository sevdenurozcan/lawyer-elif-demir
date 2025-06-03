import Link from "next/link";

function Header() {
    return (
        <div>
            <div className="bg-background m-0 p-2 flex flex-row items-center justify-between fixed w-full z-100 border-b-2 border-black">
                <h1 className="text-4xl font-playfair  p-2">AVUKAT ELİF DEMİR</h1>
                <nav>
                    <ul className="flex flex-row items-center justify-center gap-8 font-extralight ">
                        <li><Link href="/">Anasayfa</Link></li>
                        <li><Link href="/hizmetler">Hizmetler</Link></li>
                        <li><Link href="/hakkinda">Hakkında</Link></li>
                        <li><Link href="/iletisim">İletişim</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header