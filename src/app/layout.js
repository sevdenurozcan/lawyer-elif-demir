import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Av. Elif Demir",
  description: "Avukat Elif Demir ile hukuki sorunlarınıza profesyonel yaklaşım.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <header className="bg-second-color m-0 p-2 flex flex-row items-center justify-between ">
          <h1 className="text-4xl font-playfair">AVUKAT ELİF DEMİR</h1>
          <nav>
            <ul className="flex flex-row items-center justify-center gap-8 font-extralight ">
              <li><Link href="/">Anasayfa</Link></li>
              <li><Link href="/hizmetler">Hizmetler</Link></li>
              <li><Link href="/hakkinda">Hakkında</Link></li>
              <li><Link href="/iletisim">İletişim</Link></li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
