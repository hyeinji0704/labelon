import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'], // Storybook Docs 자동화 지원 (선택 사항)
  argTypes: {
    variant: { control: 'select', options: ['default', 'semantic'] },
    icon: { control: 'text' },
    label: { control: 'text' },
    contents: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

// 기본 스토리 (Default 대신 Primary 이름 사용)
export const Primary: Story = {
  args: {
    label: '법령근거',
    contents: '전파법 제58조의 2제2항',
    variant: 'default',
    icon: '/images/icons/icon-tag__law.svg',
  },
};

// 아이콘 없는 스토리
export const WithoutIcon: Story = {
  args: {
    label: '법령근거',
    variant: 'default',
    icon: '', // 빈 값 → 아이콘 없음
  },
};

// semantic variant 스토리
export const Semantic: Story = {
  args: {
    label: '법령근거',
    contents: ['전파법 제58조의 2제2항', '전파법 제58조의 3제1항'],
    variant: 'semantic',
    icon: '/images/icons/icon-tag__law.svg',
  },
};
