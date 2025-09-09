import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Skeleton className="h-96 md:h-[500px] bg-gray-900 rounded-lg" />
    </section>
  );
}
