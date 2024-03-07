import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const PokemonCard = () => (
    <Card>
        <CardHeader>
            <div className="relative aspect-square w-full ">
                <Skeleton className="h-full w-full" />
            </div>
        </CardHeader>
        <CardContent>
            <CardTitle className="capitalize">
                <Skeleton className="h-6 w-3/4" />
            </CardTitle>
        </CardContent>
    </Card>
);

export default PokemonCard;
