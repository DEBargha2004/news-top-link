"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function GotoPrev({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();

  return (
    <div onClick={router.back} className={cn("flex", className)}>
      {children}
    </div>
  );
}
