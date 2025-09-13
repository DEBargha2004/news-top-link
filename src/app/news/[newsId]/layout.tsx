import CarouselSC from "./_components/carousel";
import TopNewsSC from "./_components/top-news";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CarouselSC />
      <TopNewsSC />
    </>
  );
}
