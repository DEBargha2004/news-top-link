import DurgaBanner from "@/components/custom/durga-banner";

export default function Layout({
  children,
  category,
  latestpost,
  topnews,
  trendingpost,
  videos,
  advideos,
  adimages,
}: {
  children: React.ReactNode;
  category: React.ReactNode;
  latestpost: React.ReactNode;
  topnews: React.ReactNode;
  trendingpost: React.ReactNode;
  videos: React.ReactNode;
  advideos: React.ReactNode;
  adimages: React.ReactNode;
}) {
  return (
    <main className="space-y-4">
      <DurgaBanner />
      {children}
      {topnews}
      {latestpost}
      {trendingpost}
      {videos}
      {adimages}
      {advideos}
      {category}
    </main>
  );
}
