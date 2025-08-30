import { ApiResponseWithoutPagination } from "@/types/response";
import { Clock, User } from "lucide-react";

export const revalidate = 60 * 10;

export default async function Page() {
  const res = await fetch(
    "https://master-news-service.onrender.com/api/index_delivery?intent=latest",
    {
      headers: {
        "Host-Id": "7a0e2ceb7b344f58a3245325440db44d",
      },
    }
  );
  const { data } = (await res.json()) as ApiResponseWithoutPagination;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Top News</h2>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.slice(0, 6).map((news) => (
            <article key={news.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={news.images[0]}
                  alt={news.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-2 py-1 bg-red-600 text-white text-xs font-medium rounded">
                  {news.category.name}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                {news.title}
              </h3>

              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{news.created_on}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
