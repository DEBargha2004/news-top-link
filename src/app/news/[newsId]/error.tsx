"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleReset = () => {
    console.log("reset clicked");
    setLoading(true);
    router.refresh();
  };
  return (
    <main className="min-h-[50dvh] w-full flex flex-col justify-center items-center gap-3">
      <h1 className="text-2xl text-red-600">{error.message}</h1>
      <Button
        className="flex items-center justify-center gap-2 border p-3 rounded-lg"
        onClick={handleReset}
        variant={"outline"}
      >
        <RotateCcw className={cn(loading && "animate-spin")} />
        <span>Reload</span>
      </Button>
    </main>
  );
}
