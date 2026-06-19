import logo from "@/../public/newsTopLinkLogo.webp";
import { cn } from "@/lib/utils";

export default function Logo({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      {...props}
      src={logo.src}
      alt="news-top-link"
      height={40}
      width={100}
      className={cn("h-10 w-auto", className)}
    />
  );
}
