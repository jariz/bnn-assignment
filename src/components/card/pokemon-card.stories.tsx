import PokemonCardComponent from '@/components/card/pokemon-card';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Cards / Pokemon Card',
    component: PokemonCardComponent,
    args: {},
} satisfies Meta<typeof PokemonCardComponent>;

type Story = StoryObj<typeof PokemonCardComponent>;

export const PokemonCard: Story = {
    args: {
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
        name: 'Pikachu',
    },
    decorators: Story => (
        <div className="max-w-xs">
            <Story />
        </div>
    ),
};
