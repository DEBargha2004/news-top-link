import {
  getCategoryWiseNews,
  getLatestNews,
  getNewsInfo,
  getTopNews,
  getTrendingNews,
} from "@/actions/news";
import GotoPrev from "@/components/custom/go-to-prev";
import { format } from "date-fns";
import { ArrowLeft, Clock, Eye, Facebook, Share2, Twitter } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  const newsSet = new Set<number>();

  (await getTopNews()).data.forEach((news) => newsSet.add(news.id));
  (await getLatestNews()).data.forEach((news) => newsSet.add(news.id));
  (await getTrendingNews()).data.forEach((news) => newsSet.add(news.id));
  // (await getCategoryWiseNews()).data.forEach((cat) =>
  //   cat.articles.forEach((news) => newsSet.add(news.id))
  // );

  return Array.from(newsSet).map((id) => ({ newsId: id.toString() }));
}

export async function generateMetaData({
  params,
}: {
  params: Promise<{ newsId: string }>;
}): Promise<Metadata> {
  const { newsId } = await params;
  const article = await getNewsInfo(newsId);

  return {
    title: article.title,
    description: article.body.slice(0, 100),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) {
  const { newsId } = await params;

  const article = await getNewsInfo(newsId);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <GotoPrev>
            <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Homepage
            </button>
          </GotoPrev>
        </div>
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
              {article.category.name}
            </span>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{format(article.published_on, "PPP")}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{article.total_views} views</span>
              </div>
              {/* <span>{article.readTime}</span> */}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>

          {/* <p className="text-xl text-gray-700 leading-relaxed mb-6">
            {article.subtitle}
          </p> */}

          {/* Author Info */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-6">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={article.images[0]}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <article className="text-gray-800 leading-relaxed space-y-6">
            {article.body}
          </article>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Tags</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full hover:bg-gray-300 cursor-pointer transition-colors">
              {article.category.name}
            </span>
          </div>
        </div>

        {/* Social Share */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Share this article
          </h4>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              <Facebook className="h-4 w-4" />
              <span>Facebook</span>
            </button>
            <button className="flex items-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-colors">
              <Twitter className="h-4 w-4" />
              <span>Twitter</span>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
