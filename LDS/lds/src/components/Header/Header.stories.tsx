import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    darkMode: {
      control: 'boolean',
      description: '다크 모드 여부',
    },
    userName: {
      control: 'text',
      description: '유저 이름',
    },
    logo: {
      control: 'text',
      description: '로고 이미지 경로',
    },
    appName: {
      control: 'text',
      description: '앱 이름',
    },
    icons: {
      control: 'object',
      description: '아이콘 세트 (moon, sun, user.light, user.dark)',
    },
    onToggleMode: { action: 'toggle mode' },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Light: Story = {
  args: {
    logo: '/images/labelon_logo.svg',
    appName: 'Label ON',
    userName: '천수희',
    darkMode: false,
    icons: {
      moon: '/images/icons/moon.svg',
      sun: '/images/icons/sun.svg',
      user: {
        light: '/images/icons/icon-user.svg',
        dark: '/images/icons/icon-user-dark.svg',
      },
    },
  },
};

export const Dark: Story = {
  args: {
    logo: '/images/labelon_logo.svg',
    appName: 'Label ON',
    userName: '천수희',
    darkMode: true,
    icons: {
      moon: '/images/icons/moon.svg',
      sun: '/images/icons/sun.svg',
      user: {
        light: '/images/icons/icon-user.svg',
        dark: '/images/icons/icon-user-dark.svg',
      },
    },
  },
};
