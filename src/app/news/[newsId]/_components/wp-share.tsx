export default function WpShare({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) {
  return (
    <a href={`whatsapp://send?text=${url}`} target="_blank">
      {children}
    </a>
  );
}
