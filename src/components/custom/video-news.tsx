import { Data } from "@/types/response";
import { format } from "date-fns";
import Link from "next/link";

export default function VideoNews({
  data,
  hideShowAll,
}: {
  data: Data[];
  hideShowAll?: boolean;
}) {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Video News</h2>
          {!hideShowAll && (
            <Link
              href={"video-news"}
              className="text-red-400 hover:text-red-300 font-medium transition-colors"
            >
              Watch All →
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.map((news) => (
            <div key={news.id} className="group">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gray-800">
                <iframe
                  src={`https://www.youtube.com/embed/${news.videos[0]}`}
                  title={news.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
              <Link href={`/news/${news.id}`}>
                <h3 className="font-semibold mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                  {news.title}
                </h3>
              </Link>
              <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                {news.body}
              </p>
              <div className="flex items-center text-xs text-gray-400 gap-2">
                <span>{news.total_views} views</span>
                <span>{format(new Date(news.published_on), "PPP")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
