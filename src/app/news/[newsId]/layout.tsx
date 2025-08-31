export default function Layout({
  children,
  carousel,
  topnews,
}: {
  children: React.ReactNode;
  carousel: React.ReactNode;
  topnews: React.ReactNode;
}) {
  return (
    <>
      {children}
      {carousel}
      {topnews}
    </>
  );
}
