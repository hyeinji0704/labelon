import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: '법령근거',
    content: '전파법 제58조의 2제2항',
  },
};
