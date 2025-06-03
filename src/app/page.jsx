import LandingPage from "./components/LandingPage";
import Hakkimda from "./components/Hakkimda";
import Hizmetler from "./components/Hizmetler";
import OzluSoz from "./components/OzluSoz";
import Yorumlar from "./components/Yorumlar";
import Iletisim from "./components/Iletisim";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <Hakkimda />
      <Hizmetler />
      <OzluSoz />
      <Yorumlar />
      <Iletisim />
    </div>
  );
}
