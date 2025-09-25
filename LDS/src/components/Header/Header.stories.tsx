import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    userName: { control: 'text', description: '유저 이름' },
    logo: { control: 'text', description: '로고 이미지 경로' },
    appName: { control: 'text', description: '앱 이름' },
    onToggleMode: { action: 'toggle mode' },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    logo: '/images/labelon_logo.svg',
    appName: 'Label ON',
    userName: '천수희',
  },
};
