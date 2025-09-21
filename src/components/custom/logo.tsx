import Image, { ImageProps } from "next/image";
import logo from "@/../public/newsTopLinkLogo.webp";
import { cn } from "@/lib/utils";

export default function Logo({ className, ...props }: Partial<ImageProps>) {
  return (
    <Image
      {...props}
      src={logo}
      alt="news-top-link"
      height={40}
      width={100}
      className={cn("h-10 w-auto", className)}
    />
  );
}
