import { Meta, StoryObj } from '@storybook/react';
import PaginationComponent from '@/components/actions/pagination';

export default {
    title: 'Action / Pagination',
    component: PaginationComponent,
} satisfies Meta<typeof PaginationComponent>;

type Story = StoryObj<typeof PaginationComponent>;

export const Pagination: Story = {
    args: {
        count: 1337,
    },
};
