import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
  component: Sidebar,
  argTypes: {
    isOpen: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Open: Story = {
  args: {
    isOpen: true,
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
  },
};
