import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="w-full aspect-video rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  );
}
