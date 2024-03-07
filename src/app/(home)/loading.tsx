import SkeletonCard from '@/components/card/skeleton-card';

export default function Loading() {
    return new Array(20).fill(null).map((_, index) => <SkeletonCard key={index} />);
}
