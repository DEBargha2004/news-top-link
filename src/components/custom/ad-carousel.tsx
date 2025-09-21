import { cn } from "@/lib/utils";
import { AdBannerImageData } from "@/types/response";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function AdCarousel({ data }: { data: AdBannerImageData[] }) {
  const [activeAd, setActiveAd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAd((prev) => (prev >= data.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearTimeout(interval);
  }, [data]);

  return (
    <div className="relative h-full">
      {data.map((ad, ad_idx) => (
        <Dialog key={ad.id}>
          <DialogTrigger>
            <Image
              src={ad.image_url}
              alt={`Advertisement ${ad_idx + 1}`}
              height={300}
              width={600}
              className={cn(
                "w-full h-full transition-all duration-500 delay-500 absolute top-0 left-0",
                activeAd === ad_idx ? "block" : "hidden"
              )}
            />
          </DialogTrigger>
          <DialogContent className="min-w-1/2 h-fit p-5">
            <DialogHeader>
              <DialogTitle />
            </DialogHeader>
            <Image
              key={ad.id}
              src={ad.image_url}
              alt={`Advertisement ${ad_idx + 1}`}
              height={300}
              width={600}
              className={cn("w-full transition-all duration-500 delay-500")}
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
