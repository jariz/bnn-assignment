import sdk from '@/lib/sdk';
import PokemonCard from '@/components/card/pokemon-card';
import { notFound } from 'next/navigation';
import Pagination from '@/components/actions/pagination';
import { missingno, PAGE_SIZE } from '@/lib/const';
import Link from 'next/link';

export default async function Home({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const { pokemons } = await sdk.Overview({
        limit: PAGE_SIZE,
        offset: searchParams.offset ? parseInt(searchParams.offset as string) : 0,
    });
    if (!pokemons) {
        return notFound();
    }

    const { results, count, nextOffset } = pokemons;

    return (
        <>
            {results?.map(
                pokemon =>
                    pokemon && (
                        <Link href={`/${pokemon.name}`} key={pokemon.id}>
                            <PokemonCard
                                key={pokemon.id}
                                name={pokemon.name ?? 'Missingno.'}
                                image={pokemon.dreamworld ?? missingno}
                            />
                        </Link>
                    )
            )}
            <div className="col-span-5  flex place-content-center">
                <Pagination count={count ?? 0} />
            </div>
        </>
    );
}
