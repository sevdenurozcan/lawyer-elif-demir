import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <Header></Header>

        {children}
        
        <Footer/>
      </body>
        
    </html>
  );
}
