import { Clock, Play } from "lucide-react";

export default async function Page() {
  const videos = [
    {
      id: 1,
      embedId: "dQw4w9WgXcQ",
      title: "Breaking News: Global Economic Update",
      description:
        "Live coverage of the latest economic developments affecting markets worldwide.",
      duration: "12:34",
      views: "45K",
    },
    {
      id: 2,
      embedId: "jNQXAC9IVRw",
      title: "Climate Change: Expert Panel Discussion",
      description:
        "Leading scientists discuss the latest climate research and its implications.",
      duration: "18:22",
      views: "78K",
    },
    {
      id: 3,
      embedId: "ScMzIvxBSi4",
      title: "Technology Innovation Showcase",
      description:
        "Exploring the newest technological advances shaping our future.",
      duration: "15:45",
      views: "92K",
    },
  ];

  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Video News</h2>
          <a
            href="#"
            className="text-red-400 hover:text-red-300 font-medium transition-colors"
          >
            Watch All →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gray-800">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  className="w-full h-full"
                  allowFullScreen
                />
                <div className="absolute bottom-2 right-2 bg-black/75 text-white px-2 py-1 text-xs rounded flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {video.duration}
                </div>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                {video.title}
              </h3>
              <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                {video.description}
              </p>
              <div className="flex items-center text-xs text-gray-400">
                <Play className="h-3 w-3 mr-1" />
                <span>{video.views} views</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
