"use client";

export default function FbShare({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  const handleShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}&quote=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return <div onClick={handleShare}>{children}</div>;
}
