import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['question', 'answer'] },
    placeholder: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Question: Story = {
  args: {
    label: '질문',
    variant: 'question',
    placeholder: '내용을 입력하세요.',
  },
};

export const Answer: Story = {
  args: {
    label: '답변',
    variant: 'answer',
    placeholder: '내용을 입력하세요.',
  },
};
