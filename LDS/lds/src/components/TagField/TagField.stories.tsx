import type { Meta, StoryObj } from '@storybook/react';
import { TagField } from './TagField';

const meta: Meta<typeof TagField> = {
  title: 'Components/TagField',
  component: TagField,
  argTypes: {
    // Tag와 TextField를 켜고 끌 수 있는 boolean 컨트롤 추가
    showTag: { control: 'boolean' },
    showTextField: { control: 'boolean' },
    tag: { control: 'object' },
    textField: { control: 'object' },
    direction: { control: 'select', options: ['row', 'column'] },
  },
};

export default meta;
type Story = StoryObj<typeof TagField>;

// 디폴트: Tag 최소화, TextField만
export const Default: Story = {
  args: {
    showTag: true,
    tag: { label: '항목', variant: 'semantic',
    },
    showTextField: true,
    textField: {
      placeholder: '내용을 입력하세요',
    },
    direction: 'column',
  },
};

// 확장: 아이콘 + contents 추가
export const WithIconAndContents: Story = {
  args: {
    showTag: true,
    tag: {
      label: '법령',
      icon: '/images/icons/icon-tag__law.svg',
      contents: ['전파법 제58조의 2제2항'],
      variant: 'semantic',
    },
    showTextField: true,
    textField: {
      placeholder: '법령 내용을 입력하세요',
    },
    direction: 'column',
  },
};

// TextField만 (Tag 없음)
export const OnlyTextField: Story = {
  args: {
    showTag: false,
    showTextField: true,
    textField: {
      placeholder: '텍스트만 입력할 수 있어요',
    },
  },
};

// Tag만 (TextField 없음)
export const OnlyTag: Story = {
  args: {
    showTag: true,
    tag: { label: '단독 태그', variant: 'default' },
    showTextField: false,
  },
};
