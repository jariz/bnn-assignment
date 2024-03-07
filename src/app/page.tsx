import sdk from '@/lib/sdk';
import PokemonCard from '@/components/pokemon-card';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import OverviewPagination from '@/components/overview-pagination';
import { PAGE_SIZE } from '@/lib/const';

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
        <main className="flex flex-col gap-6">
            <nav className="bg-primary py-4">
                <div className="container">
                    <Link href="/" className="text-white">
                        BNN Pokédex
                    </Link>
                </div>
            </nav>

            <div className="container flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
                    {results?.map(pokemon => (
                        <PokemonCard
                            key={pokemon?.id}
                            name={pokemon?.name ?? 'Missingno'}
                            image={
                                pokemon?.dreamworld ??
                                'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2256%22%20shape-rendering%3D%22crispEdges%22%3E%3Cpath%20fill%3D%22%23F8E8F8%22%20d%3D%22M8%200v24H0v32h24V0%22%2F%3E%3Cpath%20fill%3D%22%23807098%22%20d%3D%22M12%200h2v1h1v1h1v1h-1v1h-2V3h-1V0zm3%200h1v1h-1V0zm2%200h2v1h-1v1h-1V0zm4%200h2v1h-2V0zm-2%201h2v1h-2V1zm4%200h1v3h-2v1h-1V3h1V2h1V1zm-6%202h1v2h-1V3zm2%200h1v2h-1V3zM9%204h4v1H9V4zm5%201h3v4h-1V6h-2V5zm4%200h1v1h-1V5zm2%200h1v1h1V5h2v1h-1v2h-1v1h-2v1h-1V9h-1V7h1V6h1V5zM8%207h1v1H8V7zm0%203h2v1h1v1H9v-1H8v-1zm13%200h1v1h1v1h-2v-2zm2%200h1v1h-1v-1zm-11%201h1v1h-1v-1zm2%200h1v1h-1v-1zm3%200h1v1h-1v-1zm2%200h1v1h-1v-1zM8%2012h1v1H8v-1zm3%200h1v1h-1v-1zm2%200h1v1h-1v-1zm2%200h1v1h2v1h1v1h-2v-1h-3v-1h1v-1zm-5%201h1v1h-1v-1zm2%200h1v1h-1v-1zm7%200h2v1h-2v-1zm3%200h2v1h-2v-1zM8%2015h1v1H8v-1zm11%200h2v1h1v1h-2v-1h-1v-1zm4%200h1v1h-1v-1zm-13%201h1v1h-1v-1zm2%200h1v1h-1v-1zm2%200h4v1h-4v-1zm-2%202h1v1h-1v-1zm3%200h1v1h1v1h-3v-1h1v-1zm4%200h4v1h-2v1h-3v-1h1v-1zM9%2019h1v1H9v-1zm2%200h1v1h-1v-1zm10%201h3v2h-1v-1h-2v-1zm-11%201h2v2H9v-1h1v-1zm4%200h2v3h1v-1h1v2h1v1h-2v-1h-2v-1h-1v-1h-1v-1h1v-1zm6%200h1v1h-1v-1zm-8%202h1v1h-1v-1zm7%200h2v1h-1v1h-1v-2zm4%200h1v1h-1v-1zM0%2024h8v3H7v2h3v1H8v1H7v-1H1v-1h5v-4H0v-1zm9%200h3v1H9v-1zm4%200h1v1h-1v-1zm8%200h1v1h-1v-1zm-1%201h1v1h-1v-1zm2%200h2v3h-1v-2h-1v-1zm-6%201h1v2h-1v-2zm3%200h1v2h-1v-2zm2%200h1v2h-1v-2zm-11%202h2v1h1v1h-2v-1h-1v-1zm7%200h2v1h-2v-1zm3%200h1v1h-1v-1zm2%200h1v1h-1v-1zm-6%201h1v2h-1v-2zm3%200h1v1h1v-1h1v2h1v1h-1v2h-1v-1h-1v1h-1v-1h-2v-1h2v-1h-1v-1h1v-1zm4%200h1v1h-1v-1zm-12%202h1v1h-1v-1zm2%200h1v1h-1v-1zm2%200h1v1h-1v-1zM5%2032h1v1H5v-1zm3%201h2v1H8v-1zm3%200h1v1h-1v-1zm3%200h1v1h-1v-1zm9%200h1v1h-1v-1zM6%2034h2v1H7v1H6v1h1v1H1v-1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v-1zm11%200h2v1h-1v1h1v-1h1v1h1v1h-5v1h-1v-2h2v-2zm5%200h1v1h-1v-1zM8%2035h4v1h1v2h-3v-1H7v-1h1v-1zm5%200h2v1h-2v-1zm9%201h1v1h-1v-1zm-1%201h1v1h-1v-1zM2%2039h1v2H2v-2zm2%200h1v2H4v-2zm2%200h1v2H6v-2zm2%200h2v2H9v-1H8v-1zm3%200h1v1h-1v-1zm4%200h1v1h-1v-1zm7%200h1v1h-1v-1zm-5%201h1v1h-1v-1zm2%200h1v1h-1v-1zm2%200h1v1h-1v-1zM1%2041h1v1H1v-1zm2%200h1v1H3v-1zm2%200h1v1H5v-1zm2%200h1v1H7v-1zm3%200h2v2h-1v-1h-1v-1zm4%200h2v1h7v1h-1v1h-1v-1h-1v3h-4v-1h1v-2h-2v-1h-1v-1zm9%200h1v1h-1v-1zm-10%202h2v1h1v1h-4v1h1v1h1v-1h1v1h1v1h-4v-1h-1v-3h2v-1zm10%200h1v1h-1v-1zM0%2045h10v3H8v-2H0v-1zm22%200h1v1h-1v-1zm-1%201h1v1h-1v-1zm2%200h1v2h-1v-2zM4%2048h4v2H7v-1H6v1H5v-1H4v-1zm6%200h2v3h-1v-1h-1v-2zm6%200h7v1h-7v-1zM0%2049h4v1h1v1H0v-2zm13%200h1v1h-1v-1zm2%200h1v1h2v1h-3v-2zm-9%201h1v2H6v-2zm2%200h2v1h1v1h1v1H7v-1h1v-2zm11%200h5v1h-1v1h-1v-1h-1v1h-3v-1h1v-1zm-7%201h3v1h-3v-1zM0%2052h6v1h1v1H5v-1H4v1h1v1h1v1H4v-1H0v-3zm12%201h1v1h-1v-1zm2%200h1v3h-2v-2h1v-1zm2%200h2v3h-1v-1h-1v-2zm6%200h2v1h-1v1h-2v-1h1v-1zM7%2054h1v1H7v-1zm12%200h1v1h-1v-1zM8%2055h4v1H8v-1zm15%200h1v1h-1v-1z%22%2F%3E%3Cpath%20fill%3D%22%23181010%22%20d%3D%22M8%200h1v1H8V0zm0%206h1v1H8V6zm2%200h1v1h-1V6zm2%200h1v1h-1V6zm2%200h1v1h-1V6zM8%209h1v1H8V9zm3%200h1v1h-1V9zm2%200h1v1h-1V9zm2%200h1v1h-1V9zm6%200h1v1h-1V9zm2%200h1v1h-1V9zM8%2011h1v1H8v-1zm9%201h5v1h-5v-1zm6%200h1v1h-1v-1zm-13%202h4v1h-4v-1zm9%200h4v1h-4v-1zm-4%201h1v1h-1v-1zm2%200h2v1h-2v-1zm-5%202h1v1h-1v-1zm4%200h2v1h-2v-1zm3%200h2v1h-2v-1zm3%200h1v1h-1v-1zM8%2018h1v2H8v-2zm1%202h1v1H9v-1zm2%200h2v1h-2v-1zm4%200h1v1h-1v-1zm1%202h4v1h-4v-1zm6%200h2v1h-2v-1zM9%2025h1v1H9v-1zm2%200h5v1h-1v1h-1v-1h-1v1h1v1h-2v-1h-1v-2zM0%2026h1v1H0v-1zm8%200h1v1h1v1H8v-2zm7%201h1v1h-1v-1zm-8%201h1v1H7v-1zm-7%202h1v1H0v-1zm9%200h2v1H9v-1zm5%200h2v1h-2v-1zM1%2031h5v1H1v-1zm6%200h1v1H7v-1zm-7%201h1v2H0v-2zm9%200h7v1H9v-1zm14%200h1v1h-1v-1zM2%2033h1v1H2v-1zm2%200h1v1H4v-1zm3%200h1v1H7v-1zm1%201h2v1H8v-1zm4%200h1v1h-1v-1zM0%2035h1v1H0v-1zm23%201h1v1h-1v-1zm-1%201h1v2h-1v-2zM2%2038h1v1H2v-1zm2%200h1v1H4v-1zm2%200h1v1H6v-1zm2%200h4v1H8v-1zm6%200h1v1h-1v-1zm3%201h1v1h-1v-1zm2%200h1v1h-1v-1zm2%200h1v1h-1v-1zm2%200h1v1h-1v-1zm-10%201h1v1h-1v-1zm9%200h1v1h-1v-1zM8%2042h1v1H8v-1zm10%204h3v2h-2v-1h-1v-1zm-1%201h1v1h-1v-1zm-1%202h1v1h-1v-1zm7%200h1v1h-1v-1zm-5%203h3v1h-3v-1zm4%200h1v1h-1v-1z%22%2F%3E%3Cpath%20fill%3D%22%23F0B088%22%20d%3D%22M8%205h1v1H8V5zm1%201h1v1h1V6h1v1h1V6h1v1h1V6h1v2H9V6zM8%208h1v1H8V8zm1%201h2v1H9V9zm3%200h1v1h-1V9zm2%200h1v1h-1V9zm6%200h1v1h-1V9zm2%200h1v1h-1V9zm-6%203h1v1h-1v-1zm6%200h1v1h-1v-1zM9%2014h1v1h4v-1h2v1h-1v1H9v-2zm14%200h1v1h-1v-1zm-7%201h1v1h-1v-1zm-8%201h1v1h3v1H8v-2zm5%201h3v1h-3v-1zm5%200h1v1h-1v-1zm3%200h1v1h-1v-1zm2%200h1v1h-1v-1zM8%2020h1v1H8v-1zm2%200h1v1h-1v-1zm3%200h2v1h-2v-1zm-5%202h1v1H8v-1zm12%200h2v1h-2v-1zm-10%203h1v2h1v1h-2v-1H9v-1h1v-1zm3%201h1v1h-1v-1zm2%200h1v1h-1v-1zm-1%201h1v1h-1v-1zM0%2029h1v1H0v-1zm11%201h3v1h-3v-1zm-5%201h1v1H6v-1zm-5%202h1v1H1v-1zm2%200h1v1H3v-1zm2%200h2v1H5v-1zm5%200h1v1h1v1h-2v-2zm3%201h3v1h-3v-1zM0%2037h1v1H0v-1zm8%200h2v1H8v-1zm15%200h1v1h-1v-1zM1%2038h1v1H1v-1zm2%200h1v1H3v-1zm2%200h1v1H5v-1zm2%200h1v1H7v-1zm5%200h2v1h-2v-1zm3%200h7v1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1zM0%2039h1v2H0v-2zm10%200h1v1h-1v-1zm-2%201h1v1H8v-1zm3%200h2v1h-2v-1zm3%200h2v1h-2v-1zm9%200h1v1h-1v-1zm-7%201h7v1h-7v-1zm7%201h1v1h-1v-1zm-3%203h1v1h-1v-1zm-4%201h2v1h-1v1h-1v-2zm2%201h1v1h-1v-1zm-1%202h6v1h-6v-1zm-1%203h2v1h-2v-1zm5%200h1v1h-1v-1zm2%200h1v1h-1v-1z%22%2F%3E%3Cscript%20xmlns%3D%22%22%20id%3D%22bw-fido2-page-script%22%2F%3E%3C%2Fsvg%3E'
                            }
                        />
                    ))}
                </div>
                <div className="flex place-content-center">
                    <OverviewPagination count={count ?? 0} />
                </div>
            </div>
        </main>
    );
}
