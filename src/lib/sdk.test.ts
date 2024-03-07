import sdk from '@/lib/sdk';
import expect from 'expect';

it('fetches a pokemon', async () => {
    const data = await sdk.Detail({ name: 'pikachu' });
    expect(data.pokemon).toBeTruthy();
    expect(data.pokemon?.name).toBe('pikachu');
    expect(data.pokemon?.weight).toBe(60);
});

it('fetches a overview of pokemons', async () => {
    const data = await sdk.Overview({ limit: 1, offset: 0 });
    expect(data.pokemons).toBeTruthy();
    expect(data.pokemons?.results?.length).toBe(1);
    expect(data.pokemons?.results?.[0]?.name).toBeTruthy();
});
