import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import { TextField } from '../TextField/TextField';
import { TagList } from '../Tag/TagList';

interface DemoProps {
  showForm: boolean;
  showTags: boolean;
  required: boolean;
}

const meta: Meta<DemoProps> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    showForm: { control: 'boolean' },
    showTags: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    showForm: true,
    showTags: true,
    required: false,
  },
};
export default meta;

type Story = StoryObj<DemoProps>;

export const Playground: Story = {
  render: ({ showForm, showTags, required }) => (
    <Accordion>
  <AccordionItem title="세트 01" defaultOpen>
    <TextField label="질문" placeholder="내용을 입력하세요." height={60} />
    <TextField label="답변" placeholder="내용을 입력하세요." height={120} />
   <TagList
  items={[
    {
      label: '법령근거',
      contents: [
        '제58조 2항',
        '시행령 제77조 2항',
        '방송통신기자재 적합성 평가',
      ],
      variant: 'semantic',
    },
  ]}
/>

  </AccordionItem>

  <AccordionItem title="세트 02">
    <TextField label="질문" placeholder="세트 02 질문 입력" height={60} />
    <TextField label="답변" placeholder="세트 02 답변 입력" height={120} />
    <TagList
      items={[
        {
          label: '법령근거',
          contents: [
            '제58조 2항',
            '시행령 제77조 2항',
            '방송통신기자재 적합성 평가',
          ],
          variant: 'semantic',
        },
      ]}
    />

  </AccordionItem>

  <AccordionItem title="세트 03">
    <TextField label="질문" placeholder="세트 03 질문 입력" height={60} />
    <TextField label="답변" placeholder="세트 03 답변 입력" height={120} />
   <TagList
      items={[
        {
          label: '법령근거',
          contents: [
            '제58조 2항',
            '시행령 제77조 2항',
            '방송통신기자재 적합성 평가',
          ],
          variant: 'semantic',
        },
      ]}
    />

  </AccordionItem>
</Accordion>

  ),
};
