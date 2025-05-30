import Image from "next/image";
import { PiCursorClickFill } from "react-icons/pi";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { GoLaw } from "react-icons/go";
import { MdBusinessCenter } from "react-icons/md";
import { RiNewspaperLine } from "react-icons/ri";


export default function Home() {
  return (
    <div>
      <div className="w-full h-[750px] bg-[url(/landing-page.jpg)] bg-cover bg-no-repeat bg-top">
        <div className="w-full h-[750px] flex flex-col items-center justify-center gap-16 bg-background/60">
          <h1 className="text-8xl font-playfair">AV. ELİF DEMİR</h1>
          <h3 className="text-4xl font-montserrat">Hukukta Yol Arkadaşınız</h3>
          <button className="hover:cursor-pointer border-white border-[1px] p-4 pr-6 pl-6">Randevu Al</button>
        </div>
      </div>
      <div className="w-full h-auto flex justify-between p-16 pt-64 pb-64 overflow-hidden">
        <div className="font-montserrat">
          <h3 className="text-6xl font-playfair">HAKKIMDA</h3>
          <p className="text-xl w-[600px] pt-8  leading-relaxed">Ben Av. Elif Demir. Marmara Üniversitesi Hukuk Fakültesi mezunuyum. İstanbul Barosu’na bağlı olarak serbest avukatlık yapmaktayım. Müvekkillerime başta aile hukuku, ceza hukuku ve iş hukuku olmak üzere birçok alanda profesyonel hukuki destek sunuyorum. Önceliğim, müvekkillerimin haklarını en etkin şekilde savunmaktır.</p>
          <button className="hover:cursor-pointer border-[1px] border-white p-4 pr-6 pl-6 mt-8 text-center">
            <span className="flex flex-col items-center">
              Dahası için<PiCursorClickFill />
            </span>
          </button>
        </div>

        <div>
          <Image src="/elif-demir.jpg" width={700} height={500} alt="Av. Elif Demir"></Image>
        </div>
      </div>
      <div className="w-full bg-second-color p-16 pb-64 pt-64 font-montserrat">
        <h3 className="text-6xl font-playfair ">HİZMETLERİM</h3>

        <p className="mt-6 leading-relaxed">Hukuki ihtiyaçlarınızı hassasiyet ve uzmanlıkla karşılamak üzere tasarlanmış kapsamlı hizmetlerimizi keşfedin.</p>
        <div className="grid grid-cols-3 gap-16 mt-16 content-center">
          <div className="w-auto h-72 row-span-2">
          </div>
          <div className="w-auto p-16 rounded-2xl h-72 text-center border-4 border-b-0 border-r-0">
            <MdBusinessCenter className="w-full text-6xl text-center" />
            <h2 className="text-2xl mb-6"> İş Hukuku </h2>
            <p className="leading-relaxed">İşe iade davaları, kıdem tazminatı, mobbing ve haksız işten çıkarma süreçleri.</p>
          </div>
          <div className="w-auto p-16 rounded-2xl h-72 text-center border-4 border-l-0 border-b-0">
            <RiNewspaperLine className="w-full text-6xl text-center" />
            <h2 className="text-2xl mb-6"> Vergi Hukuku </h2>
            <p className="leading-relaxed"> Vergi cezalarına itiraz, uzlaşma süreçleri ve vergi davaları.</p>
          </div>
          <div className="w-auto p-16 rounded-2xl h-72 text-center border-4  border-t-0 border-r-0">
            <GoLaw className="w-full text-6xl text-center" />
            <h2 className="text-2xl mb-6"> Ceza Hukuku </h2>
            <p className="leading-relaxed"> Haksız suçlamalara karşı savunma, mağdur hakları ve ceza davalarında temsil. </p>
          </div>
          <div className="w-auto p-16 rounded-2xl h-72 text-center border-4 border-l-0 border-t-0">
            <HiMiniBuildingLibrary className="w-full text-6xl text-center" />
            <h2 className="text-2xl mb-6"> İdare Hukuku </h2>
            <p className="leading-relaxed">İdari işlemlere itiraz, memur davaları, disiplin cezaları ve iptal davalarında hukuki destek.</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[750px] bg-[url(/law1.jpg)] bg-cover">
        <div className="w-full h-full bg-background/60 flex flex-col gap-8 justify-center items-center">
          <p className="text-3xl font-montserrat">"Avukat, yurttaşın devlete karşı güvencesidir; onun varlığı, hakkın sessiz kalmamasıdır."</p>
          <p className="text-2xl font-montserrat"> - Av. Turgut Kazan, Savunma Hakkı ve Hukukun Üstünlüğü -</p>
        </div>
      </div>

      <div className="w-full pt-64 pb-64 bg-black p-16">
        <h4 className="text-6xl font-playfair">DANIŞAN YORUMLARI</h4>
        <div className=" flex flex-row mt-32 text-md font-montserrat">
          <div className="p-12 text-center leading-relaxed border-[1px] border-white">
            <p>"Elif Hanım, hukuki sürecim boyunca hem çok ilgiliydi hem de bana güven verdi. Dava sürecini en başından sonuna kadar şeffaf bir şekilde yürüttü. Onun sayesinde haklarımı sonuna kadar savunabildim."</p>
            <p className="mt-14">- Mert A. -</p>
          </div>
          <div className="p-12 text-center leading-relaxed border-[1px] border-white border-l-0">
            <p>"Elif Hanım, sadece bir avukat değil aynı zamanda sürecin psikolojik yükünü hafifletmede de çok yardımcı oldu. Özellikle aile hukuku alanındaki uzmanlığı ile içimi rahatlattı."</p>
            <p className="mt-8">- Derya T. -</p>
          </div>
          <div className="p-12 text-center leading-relaxed border-[1px] border-white border-l-0">
            <p>"İlk defa hukuki bir problem yaşadığımda çok tedirgindim. Elif Demir’in sakinliği, bilgisi ve yönlendirmeleri sayesinde kendimi yalnız hissetmedim. İşini gerçekten hakkıyla yapan bir avukat."</p>
            <p className="mt-14">- Kadir S. -</p>
          </div>
          <div className="p-12 text-center leading-relaxed border-[1px] border-white border-l-0">
            <p>"Bir arkadaşımın tavsiyesiyle Elif Hanım’a başvurdum. İyi ki de öyle yapmışım. Haklarımı en iyi şekilde koruyarak davayı olumlu sonuçlandırdı. Profesyonelliği ve dürüst yaklaşımı takdire değer."</p>
            <p className="mt-14"> - Oya D. -</p>
          </div>
        </div>
      </div>
      <div className="w-full pt-64 pb-64 p-16">
        <h2 className="text-6xl font-playfair w-full text-center">İLETİŞİM</h2>
        <div className="flex flex-col justify-center items-center font-montserrat mt-16 gap-16">
          <div className="flex  gap-16">
            <div>
              <h6>İsim*</h6>
              <input type="text" className="border-b-[1px]" />
            </div>
            <div>
              <h6>Soyisim*</h6>
              <input type="text" className="border-b-[1px]" />
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
          <div className="flex flex-col">
            <h6>Mesajınız*</h6>
            <input type="text" className="w-full border-b-[1px]" />
          </div>
        </div>
      </div>

    </div>
  );
}
