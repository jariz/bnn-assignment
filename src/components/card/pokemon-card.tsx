import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface Props {
    name: string;
    image: string;
}

const PokemonCard = ({ name, image }: Props) => (
    <Card>
        <CardHeader>
            <div className="relative aspect-square w-full ">
                <Image src={image} alt={name} fill />
            </div>
        </CardHeader>
        <CardContent>
            <CardTitle className="capitalize">{name}</CardTitle>
        </CardContent>
    </Card>
);

export default PokemonCard;
