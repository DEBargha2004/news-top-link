"use client";

import { AdBannerImageData } from "@/types/response";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Info } from "lucide-react";
import { PopoverClose } from "@radix-ui/react-popover";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function AdImages({ data }: { data: AdBannerImageData[] }) {
  const [activeAd, setActiveAd] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setActiveAd((prev) => (prev >= data.length - 1 ? 0 : prev + 1));
    }, 6000);
  }, [data]);

  return (
    <section className="py-12 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 justify-start mb-8">
          <h2 className="text-3xl font-bold">Advertisements</h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button>
                Disclaimer <Info />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="space-y-4">
              <h3 className="font-bold">Disclaimer</h3>
              <p className="text-muted-foreground">
                Itegrity of any product/service/scheme is intelectual
                responsibility of the Advertiser itself. Newstoplink.com takes
                no responsibility related to commitments made by an advertiser
                to our readers.
              </p>
              <PopoverClose asChild>
                <Button>I Understood!</Button>
              </PopoverClose>
            </PopoverContent>
          </Popover>
        </div>

        <div className="relative h-60">
          {data.map((ad, ad_idx) => (
            <img
              key={ad.id}
              src={ad.image_url}
              className={cn(
                "w-full h-60 transition-all duration-500 delay-500 absolute top-0 left-0",
                activeAd === ad_idx ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
