import { Facebook, Share2, Twitter } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Skeleton className="rounded-full px-6 py-3" />
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <Skeleton className="rounded-full px-12 py-3" />
              <Skeleton className="rounded-full px-6 py-3" />
              {/* <span>{article.readTime}</span> */}
            </div>
          </div>

          <Skeleton className="h-5 w-[calc(100%-4rem)]" />
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <Skeleton className="w-full h-64 md:h-96 object-cover rounded-lg" />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <Skeleton className="w-full rounded-lg h-[320px]" />
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Tags</h4>
          <div className="flex flex-wrap gap-2">
            <Skeleton className="rounded-full w-40" />
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
          </div>
        </div>
      </article>
    </div>
  );
}
