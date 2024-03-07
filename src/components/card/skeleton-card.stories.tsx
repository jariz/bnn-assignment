import SkeletonCardComponent from '@/components/card/skeleton-card';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Cards / Skeleton Card',
    component: SkeletonCardComponent,
    args: {},
} satisfies Meta<typeof SkeletonCardComponent>;

type Story = StoryObj<typeof SkeletonCardComponent>;

export const SkeletonCard: Story = {
    args: {},
    decorators: Story => (
        <div className="max-w-xs">
            <Story />
        </div>
    ),
};
