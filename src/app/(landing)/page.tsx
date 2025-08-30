import HeroCarousel from "@/components/custom/hero-carousel";

export const relaidate = 60 * 10;

export default async function Home() {
  const res = await fetch(
    "https://master-news-service.onrender.com/api/index_delivery?intent=latest",
    {
      headers: {
        "Host-Id": "7a0e2ceb7b344f58a3245325440db44d",
      },
    }
  );
  const data = await res.json();
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <HeroCarousel data={data} />
    </section>
  );
}
