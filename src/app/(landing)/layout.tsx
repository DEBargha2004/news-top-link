export default function Layout({
  children,
  category,
  latestpost,
  topnews,
  trendingpost,
  videos,
}: {
  children: React.ReactNode;
  category: React.ReactNode;
  latestpost: React.ReactNode;
  topnews: React.ReactNode;
  trendingpost: React.ReactNode;
  videos: React.ReactNode;
}) {
  return (
    <>
      {children}
      {topnews}
      {latestpost}
      {trendingpost}
      {videos}
      {category}
    </>
  );
}
