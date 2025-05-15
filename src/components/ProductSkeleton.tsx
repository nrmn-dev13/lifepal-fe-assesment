import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductSkeleton() {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      {/* Image skeleton */}
      <Skeleton className="h-48 w-full rounded-t-lg" />

      <CardHeader className="pb-2 space-y-2">
        {/* Title skeleton */}
        <div className="flex justify-between items-start">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-5 w-16" />
        </div>

        {/* Description skeleton - two lines */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </CardHeader>

      <CardContent className="pb-2 flex-grow">
        {/* Brand and stock skeleton */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center pt-2">
        {/* Price skeleton */}
        <div className="flex flex-col gap-1">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-3 w-12" />
        </div>

        {/* Rating skeleton */}
        <Skeleton className="h-5 w-12" />
      </CardFooter>
    </Card>
  );
}

export function ProductSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
    </div>
  );
}
