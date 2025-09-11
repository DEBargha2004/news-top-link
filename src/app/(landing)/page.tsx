import { getCategoryWiseNews, getTopNews, getQuotation } from "@/actions/news";
import HeroCarousel from "@/components/custom/hero-carousel";
import Link from "next/link";

export const relaidate = 60 * 10;

export default async function Home() {
  const { data } = await getTopNews();
  const categories = await getCategoryWiseNews();
  const quoteData = await getQuotation();
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-x-auto py-4 mb-0">
        <div className="flex space-x-4">
          {categories.data.map((item) => (
            <div
              key={item.name}
              className="min-w-max px-6 py-3 text-gray-800 rounded hover:bg-gray-200 transition border-1 border-red-600 cursor-pointer"
            >
              <Link href={`/category/${item.articles[0].category.id}`}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <b>{quoteData.data.q}</b>
        <p>-{quoteData.data.a}</p>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroCarousel data={data} />
      </section>
    </div>
  );
}
