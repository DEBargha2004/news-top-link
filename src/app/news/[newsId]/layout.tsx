import { FaWhatsapp } from "react-icons/fa";
import CarouselSC from "./_components/carousel";
import TopNewsSC from "./_components/top-news";
import WpShare from "./_components/wp-share";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CarouselSC />
      <TopNewsSC />
    </>
  );
}
