import { Meta, StoryObj } from '@storybook/react';
import { Button as ButtonComponent } from '@/components/actions/button';

export default {
    title: 'Action / Button',
    component: ButtonComponent,
    args: {
        children: 'Call to action',
    },
} satisfies Meta<typeof ButtonComponent>;

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
    args: {
        variant: 'default',
        size: 'default',
    },
};
