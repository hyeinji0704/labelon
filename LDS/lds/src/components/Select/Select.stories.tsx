import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: [
      { value: 'basic', label: '기본형' },
      { value: 'advanced', label: '고급형' },
    ],
    value: 'basic',
  },
};

export const Disabled: Story = {
  args: {
    options: [
      { value: 'basic', label: '기본형' },
      { value: 'advanced', label: '고급형' },
    ],
    value: 'basic',
    disabled: true,
  },
};
