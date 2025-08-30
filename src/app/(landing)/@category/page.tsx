import { ArrowRight } from "lucide-react";

export default async function Page() {
  const categories = [
    {
      name: "Politics",
      color: "bg-red-600",
      articles: [
        {
          id: 1,
          image:
            "https://images.pexels.com/photos/6956357/pexels-photo-6956357.jpeg?auto=compress&cs=tinysrgb&w=400",
          title: "Senate Passes Infrastructure Bill",
          summary:
            "Bipartisan legislation promises major investments in transportation and broadband.",
          time: "2h ago",
        },
        {
          id: 2,
          image:
            "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=400",
          title: "International Summit on Trade Relations",
          summary:
            "Leaders discuss new frameworks for global economic cooperation.",
          time: "4h ago",
        },
      ],
    },
    {
      name: "Technology",
      color: "bg-blue-600",
      articles: [
        {
          id: 3,
          image:
            "https://images.pexels.com/photos/5622861/pexels-photo-5622861.jpeg?auto=compress&cs=tinysrgb&w=400",
          title: "AI Breakthrough in Medical Diagnosis",
          summary:
            "New machine learning model shows 95% accuracy in early cancer detection.",
          time: "1h ago",
        },
        {
          id: 4,
          image:
            "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
          title: "Quantum Internet Takes Shape",
          summary:
            "Scientists achieve secure quantum communication over long distances.",
          time: "3h ago",
        },
      ],
    },
    {
      name: "Sports",
      color: "bg-green-600",
      articles: [
        {
          id: 5,
          image:
            "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=400",
          title: "Championship Finals Set Record Viewership",
          summary:
            "Over 100 million viewers tune in for the most-watched game of the season.",
          time: "30m ago",
        },
        {
          id: 6,
          image:
            "https://images.pexels.com/photos/3886242/pexels-photo-3886242.jpeg?auto=compress&cs=tinysrgb&w=400",
          title: "Olympic Preparations Underway",
          summary:
            "Athletes from around the world gear up for the upcoming games.",
          time: "2h ago",
        },
      ],
    },
    {
      name: "Entertainment",
      color: "bg-purple-600",
      articles: [
        {
          id: 7,
          image:
            "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=400",
          title: "Blockbuster Movie Breaks Opening Weekend Records",
          summary:
            "Highly anticipated sequel surpasses all previous box office milestones.",
          time: "45m ago",
        },
        {
          id: 8,
          image:
            "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
          title: "Music Festival Announces Star-Studded Lineup",
          summary:
            "Major artists confirmed for this summer's biggest music event.",
          time: "1h ago",
        },
      ],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          News by Category
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <span
                    className={`${category.color} text-white px-3 py-1 rounded-full text-sm font-semibold mr-3`}
                  >
                    {category.name}
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium group"
                >
                  View All
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="space-y-4">
                {category.articles.map((article) => (
                  <article
                    key={article.id}
                    className="flex space-x-4 group cursor-pointer"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-24 h-20 object-cover rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                        {article.summary}
                      </p>
                      <span className="text-xs text-gray-500">
                        {article.time}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
