import Image from 'next/image';
import sdk from '@/lib/sdk';
import { notFound } from 'next/navigation';
import { missingno } from '@/lib/const';
import { Press_Start_2P } from 'next/font/google';
import { cn } from '@/lib/utils';
import { DetailQuery } from '@/generated/api';

const pressStart2P = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
});

type D = keyof Required<Required<DetailQuery>['pokemon']>;

export default async function DetailPage({ params: { name } }: { params: { name: string } }) {
    const { pokemon } = await sdk.Detail({ name });

    if (!pokemon?.name) {
        return notFound();
    }

    return (
        <div className="container grid grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
                <div className="group relative aspect-square w-full border-2 border-black bg-lime-100">
                    <Image
                        alt={pokemon.name}
                        src={pokemon.sprites?.front_default ?? missingno}
                        fill
                        className="group-hover:invisible"
                    />
                    <Image
                        alt={pokemon.name}
                        src={pokemon.sprites?.back_default ?? missingno}
                        fill
                        className="invisible group-hover:visible"
                    />
                </div>
            </div>
            <div className={cn('col-span-3 capitalize', pressStart2P.className)}>
                <h1 className="mb-2 text-4xl">{pokemon.name}</h1>
                <div className="flex flex-col gap-1 text-gray-500">
                    {(pokemon.types?.length ?? 0) > 0 && (
                        <p>
                            Types: <span>{pokemon.types?.map(t => t?.type?.name ?? '').join(', ')}</span>
                        </p>
                    )}
                    {(pokemon.abilities?.length ?? 0) > 0 && (
                        <p>
                            Abilities: <span>{pokemon.abilities?.map(t => t?.ability?.name ?? '').join(', ')}</span>
                        </p>
                    )}
                    {(pokemon.held_items?.length ?? 0) > 0 && (
                        <p>
                            Items: <span>{pokemon.held_items?.map(t => t?.item?.name ?? '').join(', ')}</span>
                        </p>
                    )}
                    <p>Weight: {pokemon.weight}</p>
                </div>
                <h2 className={cn('mb-2 mt-4 text-2xl ', pressStart2P.className)}>Stats</h2>
                <div className="flex flex-col gap-1 text-gray-500">
                    {pokemon.stats?.map(stat => (
                        <p>
                            {stat?.stat?.name}: {stat?.base_stat}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
